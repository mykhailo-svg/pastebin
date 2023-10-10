import { PublicPastes } from "../../components/PublicPastes/PublicPastes";
import { MainLayout } from "../../layout/MainLayout";
import styles from "./Home.module.scss";
export const Home = () => {
  return (
    <MainLayout>
      <section className={styles.container}>
        <PublicPastes />
      </section>
    </MainLayout>
  );
};
