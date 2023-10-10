import { AiOutlineGlobal as GlobalIcon } from "react-icons/ai";
import { PasteCard } from "../PasteCard/PasteCard";
import styles from "./PublicPastes.module.scss";

export const PublicPastes = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.title}>
        <GlobalIcon fontSize="1em" />
        <span>Public pastes</span>
      </div>
      <PasteCard title="s;fdmffgjfj" category="dkgjg" />
    </aside>
  );
};
