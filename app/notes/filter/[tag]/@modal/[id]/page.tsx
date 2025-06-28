// import NotePreview from "@/app/notes/[id]/NotePreview";
// import { fetchNoteById } from "@/lib/api";

// export default async function NotePreviewPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const note = await fetchNoteById(Number(params.id));
//   return <NotePreview note={note} />;
// }
// app/notes/filter/[tag]/@modal/[id]/NotePreviewWrapper.tsx
"use client";

import NotePreview from "@/app/notes/[id]/NotePreview";

export default function NotePreviewPage() {
  return <NotePreview />;
}
