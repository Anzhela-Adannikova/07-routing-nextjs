import React from "react";
import css from "./LayoutNotes.module.css";

export default function Layout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <main className={css.container}>
      {sidebar}
      <div className={css.notesWrapper}>{children}</div>
      {modal}
    </main>
  );
}
