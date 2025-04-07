import styles from "./SocialButtons.module.css"; 

export const SocialButtons = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://github.com/wysogladszymon"
        target="blank"
        className={styles.button}
      >
        <div className={styles.icon}>
          <i className="fab fa-github"></i>
        </div>
        {/* <span>Github</span> */}
      </a>
      <a
        href="https://www.linkedin.com/in/szymon-wysogl%C4%85d-62a6972aa/"
        target="blank"
        className={styles.button}
      >
        <div className={styles.icon}>
          <i className="fab fa-linkedin-in"></i>
        </div>
        {/* <span>LinkedIn</span> */}
      </a>
      <a
        href="https://www.instagram.com/szymonwysoglad/"
        target="blank"
        className={styles.button}
      >
        <div className={styles.icon}>
          <i className="fab fa-instagram"></i>
        </div>
        {/* <span>Instagram</span> */}
      </a>
      {/* <a href="#" className={styles.button}>
        <div className={styles.icon}
        style={{
        backgroundColor: "var(--foreground)",
        color: "var(--background)"}}>
          <i className="fab fa-youtube"></i>
        </div>
        <span>YouTube</span>
      </a> */}
    </div>
  );
};
