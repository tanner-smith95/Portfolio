import styles from "./profile-banner.module.scss";

export const ProfileBanner = () => {
    return (
        <div className={`${styles["profile-banner"]} container-narrow`}>
            <div className={styles.header}>
                <div className={styles["headshot-wrapper"]}>
                    <img src="https://images.ctfassets.net/5oswxgxbfxy6/7zJFLUXqQHJiZVJnVr7wLK/d420fa05a20427c360335fe3e1b0be28/tanner-medium.png" alt="Tanner Smith" />
                </div>

                <h1 className={styles.name}>Tanner Smith</h1>

                <p className={styles.role}>
                    Full-Stack Developer & UX Enthusiast
                </p>

                <p className={styles.tagline}>
                    Building exceptional digital experiences that users love
                </p>
            </div>

            <div className={styles.description}>
                <p>
                    With over 8 years of experience in web and mobile development, I specialize in creating scalable, user-centric applications that solve real-world problems. My expertise spans the full stack, from crafting intuitive user interfaces to architecting robust backend systems.
                </p>

                <p>
                    {`I'm passionate about clean code, performance optimization, and staying current with emerging technologies. When I'm not coding, you'll find me contributing to open-source projects and mentoring aspiring developers.`}
                </p>
            </div>
        </div>
    );
}

export default ProfileBanner;