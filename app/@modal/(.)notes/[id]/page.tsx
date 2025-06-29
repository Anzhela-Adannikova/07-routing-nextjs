import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: number }>;
};

const Preview = async ({ params }: Props) => {
  const { id } = await params;

  const notePreview = await fetchNoteById(id);

  return (
    <div>
      <Modal>
        <h2>{notePreview.title}</h2>
        <p>{notePreview.content}</p>
      </Modal>
    </div>
  );
};

export default Preview;
