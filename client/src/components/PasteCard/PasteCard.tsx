import React from "react";
import styles from "./PasteCard.module.scss";
import { MdContentPaste as PasteIcon } from "react-icons/md";

type PasteCardProps = {
  title: string;
  category: string;
  programmingLang?: string;
};

export const PasteCard: React.FC<PasteCardProps> = ({ title, category }) => {
  return (
    <article className={styles.card}>
      <PasteIcon />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <span className={styles.category}>{category}</span>
        </div>
      </div>
    </article>
  );
};
