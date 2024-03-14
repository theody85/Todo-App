import styles from "./navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <span>Logo</span>
        <div className={styles.navLinks}>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>

        <div className={styles.navElRight}>
          <button className={styles.signIn}>Sign In</button>
          {/* Custom Humburger icon. Can replace with an actual hamburger icon */}
          <div
            className={styles.hamburgerIcon}
            onClick={() => setOpenHamburger(true)}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </div>
        </div>

        {openHamburger && (
          <div className={styles.hamburgerMenu}>
            <span
              className={styles.close}
              onClick={() => setOpenHamburger(false)}
            >
              X
            </span>
            <span>Home</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
