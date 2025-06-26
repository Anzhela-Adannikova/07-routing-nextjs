import React from "react";
import css from "./LayoutNotes.module.css";

interface NotesLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: NotesLayoutProps) {
  return (
    <main className={css.container}>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.notesWrapper}>
        {children}
        {modal}
      </div>
    </main>
  );
}
