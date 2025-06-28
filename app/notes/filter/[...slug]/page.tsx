import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function FilteredNotesPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;
  const tag = slug[0];
  const isAll = !tag || tag === "All";

  const data = await fetchNotes(1, "", 12, isAll ? undefined : tag);

  return <NotesClient initialData={data} tag={tag} />;
}
