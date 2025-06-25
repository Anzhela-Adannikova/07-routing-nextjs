import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.cliet";

export default async function NotesPage() {
  const initialData = await fetchNotes();

  return <NotesClient initialData={initialData} />;
}
