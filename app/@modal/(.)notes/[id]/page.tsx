// import Modal from "@/components/Modal/Modal";
// import { fetchNoteById } from "@/lib/api";

// type Props = {
//   params: Promise<{ id: number }>;
// };

// const Preview = async ({ params }: Props) => {
//   const { id } = await params;

//   const notePreview = await fetchNoteById(id);

//   return (
//     <div>
//       <Modal>
//         <h2>{notePreview.title}</h2>
//         <p>{notePreview.content}</p>
//       </Modal>
//     </div>
//   );
// };

// export default Preview;

import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotePreviewPage from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const parseId = Number(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", parseId],
    queryFn: () => fetchNotes(parseId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewPage />
    </HydrationBoundary>
  );
};

export default NotePreview;
