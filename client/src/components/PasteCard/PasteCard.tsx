import React from "react";
import styles from "./PasteCard.module.scss";
import { MdContentPaste as PasteIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import { routePath } from "../../shared/config/routePath";

type PasteCardProps = {
  title: string;
  category: string;
  programmingLang?: string;
};

export const PasteCard: React.FC<PasteCardProps> = ({ title, category }) => {
  return (
    <Link to={routePath.HOME}>
      <article className={styles.card}>
        <PasteIcon fontSize="1.5em" />
        <div className={styles.mainContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
