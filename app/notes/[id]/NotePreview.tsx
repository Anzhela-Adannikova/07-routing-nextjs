// "use client";

// import css from "./NotePreview.module.css";
// import type { Note } from "@/types/note";
// import { useRouter } from "next/router";

// interface NotePreviewProps {
//   note: Note;
// }

// export default function NotePreview({ note }: NotePreviewProps) {
//   const router = useRouter();

//   const handleBack = () => {
//     router.back();
//   };

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note.title}</h2>
//           <span className={css.tag}>{note.tag}</span>
//         </div>

//         <p className={css.content}>{note.content}</p>
//         <p className={css.date}>{note.createdAt}</p>

//         <button className={css.backBtn} onClick={handleBack}>
//           Back
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import css from "./NotePreview.module.css";
import type { Note } from "@/types/note";

type NoteParams = {
  id: string;
};

export default function NotePreview() {
  const params = useParams() as NoteParams;
  const id = Number(params.id);

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
    enabled: !Number.isNaN(id) && Boolean(id),
  });

  if (!id || Number.isNaN(id)) return <p>Invalid ID</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
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
