// модальне вікно яке відкривається при створенні нотатки
import { useEffect, useState } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useRouter } from "next/router";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.back();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [router]);

  const handleCLose = () => router.back();

  if (!mounted) return null;

  return createPortal(
    <div className={css.backdrop} onClick={handleCLose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
