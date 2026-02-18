import styles from "./page-nav.module.scss";


export const PageNav = () => {
    return (
        <nav className={styles["page-nav-component"]}>
            <div className={`${styles["inner"]} container-wide content-gutter`}>
                <div className={styles["nav-item"]}>
                    About Me
                </div>
                <div className={styles["nav-item"]}>
                    Experience
                </div>
                <div className={styles["nav-item"]}>
                    Contact Me
                </div>
            </div>
        </nav>
    );
}

export default PageNav;