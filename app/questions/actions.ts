'use server'

import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export async function createPost(formData: FormData): Promise<{ error?: string }> {
  const title = String(formData.get('title') ?? '').trim()
  const content = String(formData.get('content') ?? '').trim()

  if (!title) return { error: 'Title is required' }
  if (title.length < 3 || title.length > 70) {
    return { error: 'Title must be between 3 and 70 characters' }
  }
  if (!content) return { error: 'Content is required' }
  if (content.length < 10) {
    return { error: 'Content must be at least 10 characters' }
  }

  const { error } = await supabase.from('questions').insert({ title, content })

  if (error) {
    console.error('Error creating question:', error)
    return { error: 'Failed to create post' }
  }

  revalidatePath('/questions')
  return {}
}
