import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Params = { params: { slug: string[] } };

export default async function FilteredNotesPage({ params }: Params) {
  const tag = params.slug[0];

  const isAll = !tag || tag === "All";

  const data = await fetchNotes(1, "", 12, isAll ? undefined : tag);

  return <NotesClient initialData={data} tag={tag} />;
}
