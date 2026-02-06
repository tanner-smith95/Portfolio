import styles from "./profile-banner.module.scss";

export type ProfileBannerProps = {
    headshotUrl?: string;
    firstName?: string;
    lastName?: string;
    role?: string;
    tagline?: string;
    description?: string;
}

export const ProfileBanner = ({ headshotUrl, firstName, lastName, role, tagline, description }: ProfileBannerProps) => {
    const fullName = `${firstName || ""} ${lastName || ""}`.trim();
    return (
        <div className={`${styles["profile-banner"]} container-narrow`}>
            <div className={styles.header}>
                {headshotUrl && (<div className={styles["headshot-wrapper"]}>
                    <img src={headshotUrl} alt={fullName} />
                </div>)}

                {(firstName || lastName) && <h1 className={styles.name}>{fullName}</h1>}

                {role && (<p className={styles.role}>
                    {role}
                </p>)}

                {tagline && (<p className={styles.tagline}>
                    {tagline}
                </p>)}
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