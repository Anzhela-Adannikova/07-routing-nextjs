"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotPreview/NotPreview";
import { useParams } from "next/navigation";

export default function NotePreviewPage() {
  const { id } = useParams();

  return (
    <Modal>
      <NotePreview id={String(id)} />
    </Modal>
  );
}
