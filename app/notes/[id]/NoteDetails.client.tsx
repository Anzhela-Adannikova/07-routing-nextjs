"use client";

import css from "./NoteDetails.client.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useParams } from "next/navigation";

type NoteParams = {
  id: string;
};

export default function NoteDetailsClient() {
  const params = useParams() as NoteParams;
  const id = Number(params.id);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
    enabled: !Number.isNaN(id) && Boolean(id),
    refetchOnMount: false,
  });

  if (!id || Number.isNaN(id)) return <p>Invalid ID</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <button className={css.editBtn}>Edit note</button>
        </div>
        <p className={css.tag}>{String(note.tag)}</p>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>Created date: {note.createdAt}</p>
      </div>
    </div>
  );
}
