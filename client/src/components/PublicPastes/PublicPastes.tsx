import { PasteCard } from "../PasteCard/PasteCard";
import styles from "./PublicPastes.module.scss";
export const PublicPastes = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.title}></div>
      <PasteCard title="s;fdmffgjfj" category="dkgjg" />
    </aside>
  );
};
