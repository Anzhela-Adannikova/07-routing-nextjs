"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotPreview/NotPreview";
import { useParams } from "next/navigation";

export default function NotePreviewPage() {
  const { id } = useParams();

  if (typeof id !== "string") return null;
  return (
    <Modal>
      <NotePreview id={id} />
    </Modal>
  );
}
