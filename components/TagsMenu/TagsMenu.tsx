"use client";

import css from "./TagsMenu.module.css";
import Link from "next/link";

const TAGS = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {TAGS.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
