import RichText from "@/components/atoms/richText/richText";
import styles from "./profile-banner.module.scss";
import LazyImage from "@/components/atoms/lazyImage/lazyImage";

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
                {headshotUrl && (
                    <div className={styles["headshot-wrapper"]}>
                        <LazyImage src={headshotUrl} alt={fullName} />
                    </div>
                )}

                {(firstName || lastName) && <h1 className={styles.name}>{fullName}</h1>}

                {role && (
                    <p className={styles.role}>
                        {role}
                    </p>
                )}

                {tagline && (
                    <p className={styles.tagline}>
                        {tagline}
                    </p>
                )}
            </div>

            {description && (<div className={styles.description}>
                <RichText content={description} />
            </div>)}
        </div>
    );
}

export default ProfileBanner;