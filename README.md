# Student Q&A Forum

A full-stack Q&A forum for university students: ask questions by subject, answer your colleagues, and keep track of your own posts.

Built with **Next.js (App Router)**, **TypeScript** and **Supabase (PostgreSQL)**.

## Features

- **Questions:** create, view, edit and delete questions, each with a title, description and subject
- **Answers:** reply to any question; every question shows its answers underneath
- **Browse by subject:** filter questions by subject (e.g. Programming, Databases)
- **User accounts:** sign up and sign in with Supabase Auth
- **Ownership:** only the author can edit or delete their own questions and answers, enforced with Row Level Security
- **Dashboard:** see all the questions and answers you've posted
- **Live search:** search questions by title while you type

## Tech Stack

| Layer    | Technology                                                |
| -------- | --------------------------------------------------------- |
| Frontend | Next.js (App Router), React, TypeScript                   |
| Styling  | CSS Modules                                               |
| Backend  | Next.js Server Components, Server Actions, Route Handlers |
| Database | Supabase (PostgreSQL) with Row Level Security             |
| Auth     | Supabase Auth                                             |
