import { ReactNode } from "react";
import styles from "./MainLayout.module.scss";
import { Header } from "../components/Header/Header";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
