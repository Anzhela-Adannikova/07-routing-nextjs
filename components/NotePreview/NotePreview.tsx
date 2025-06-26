"use client";

import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";
import { useRouter } from "next/router";

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>

        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{new Date(note.createdAt).toLocaleString()}</p>

        <button className={css.backBtn} onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}
