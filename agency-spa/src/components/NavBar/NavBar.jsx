import { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";
import Logo from "../../assets/desktop/logo.svg";
import Hamburger from "../../assets/mobile/icon-hamburger.svg";
import Cross from "../../assets/mobile/icon-cross.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen((curr) => !curr);

  return (
    <div className={styles.navbar}>
      <Image className={styles.logo} src={Logo} alt=""></Image>

      {/* icons imported as images as no hover or animation effects are being added */}
      <Image
        className={styles.menu_icon}
        onClick={handleClick}
        src={isMenuOpen ? Cross : Hamburger}
        alt=""
      ></Image>

      <ul
        className={`
        ${styles.nav_links} ${!isMenuOpen ? `${styles.hidden}` : ""}
        `}
      >
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Service</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <button>Schedule a Call</button>
      </ul>
    </div>
  );
}
