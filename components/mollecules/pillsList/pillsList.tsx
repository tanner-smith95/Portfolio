import Pill from "@/components/atoms/pill/pill";
import styles from "./pills-list.module.scss";

export const PillsList = ({ heading, pills }: { heading?: string; pills: string[] }) => {
    return (
        <div className={styles["pills-list-component"]}>
            {heading && <h4 className={styles["pills-list-heading"]}>{heading}</h4>}

            <div className={styles["pills-list"]}>
                {pills.map((pill, index) => (
                    <div
                        key={`pill-${pill}-${index}`}
                        className={styles["pill-container"]}
                        data-detect-scroll-in="0.1"
                        style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}
                    >
                        <Pill text={pill} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PillsList;