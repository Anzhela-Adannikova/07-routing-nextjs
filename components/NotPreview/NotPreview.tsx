"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

type NoteParamsProps = {
  id: string;
};

export default function NotePreview({ id }: NoteParamsProps) {
  const router = useRouter();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(Number(id)),
    refetchOnMount: false,
  });

  if (!id || Number.isNaN(id)) return <p>Invalid ID</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <button className={css.backBtn} onClick={() => router.back()}>
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
