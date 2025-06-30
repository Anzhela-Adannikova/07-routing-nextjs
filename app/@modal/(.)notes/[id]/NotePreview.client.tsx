"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotPreview/NotPreview";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function NotePreviewPage() {
  const { id } = useParams();
  const router = useRouter();
  const handleCloseModal = () => {
    router.back();
  };

  return (
    <Modal onClose={handleCloseModal}>
      <NotePreview id={String(id)} onClose={handleCloseModal} />
    </Modal>
  );
}
