"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchNoteById } from "@/lib/api";
import css from "./NotPreview.module.css";
import type { Note } from "@/types/note";

type NoteParamsProps = {
  id: string;
  onClose: () => void;
};

export default function NotePreview({ id, onClose }: NoteParamsProps) {
  const parseId = Number(id);
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["notes", parseId],
    queryFn: () => fetchNoteById(parseId),
    refetchOnMount: false,
  });

  if (!id || Number.isNaN(id)) return <p>Invalid ID</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <button className={css.backBtn} onClick={onClose}>
        Back
      </button>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
}
