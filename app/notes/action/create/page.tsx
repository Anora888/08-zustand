import { Metadata } from "next";
import { TAGS } from "@/types/note";
import css from "./CreateNote.module.css";
import CreateNoteClient from "./CreateNote.client";

export const metadata: Metadata = {
  title: "Create note",
  description: "Create a new note in NoteHub.",
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>

        <CreateNoteClient categories={TAGS} />
      </div>
    </main>
  );
}