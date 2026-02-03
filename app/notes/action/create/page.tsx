import { Metadata } from "next";
import NoteForm from "@/components/NoteForm/NoteForm";
import { TAGS } from "@/types/note";
import css from "./CreateNote.module.css";

export const metadata: Metadata = {
  title: "Create note",
  description: "Create a new note in NoteHub.",
  openGraph: {
    title: "Create note",
    description: "Create a new note in NoteHub.",
    url: "",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub — a simple web-based note-taking application built with Next.js",
      },
    ],
    type: "website",
  },
};

const CreateNote = () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>

        <NoteForm
          categories={TAGS}
          onCancel={() => {}}
          onCreated={() => {}}
        />
      </div>
    </main>
  );
};

export default CreateNote;;