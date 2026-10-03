import Link from 'next/link'
import CreateQuestionForm from '../CreatePostForm'

export default function NewQuestionPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/questions" className="text-sm text-blue-600 hover:underline">
        &larr; Back to questions
      </Link>
      <h1 className="mb-6 mt-4 text-2xl font-bold">Create New Question</h1>
      <CreateQuestionForm />
    </main>
  )
}
