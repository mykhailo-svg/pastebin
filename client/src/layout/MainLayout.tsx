import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import styles from "./MainLayout.module.scss";

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
