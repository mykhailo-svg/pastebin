import {
  BiSearchAlt as SearchIcon,
  BiSolidAddToQueue as AddIcon,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../../shared/assets/logo.svg";
import { LoginButton } from "../../shared/ui/Buttons/LoginButton/LoginButton";
import { RegisterButton } from "../../shared/ui/Buttons/RegisterButton/RegisterButton";
import { routePath } from "../../shared/config/routePath";
import styles from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.mainHeader}>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <Link to={routePath.HOME} className={styles.createPasteButton}>
            <AddIcon fontSize="1.7em" color="var(--main-color)" />
            <span>Paste</span>
          </Link>

          <div className={styles.searchBlock}>
            <input type="text" placeholder="Search..." />
            <button>
              <SearchIcon fontSize="1.5em" color="var(--main-color)" />
            </button>
          </div>
        </div>
        <div className={styles.authButtons}>
          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </header>
  );
};
