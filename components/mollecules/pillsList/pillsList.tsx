import Pill from "@/components/atoms/pill/pill";
import styles from "./pills-list.module.scss";
import { getMicroCopy } from "@/utils/microsopy/microcopy";

export const PillsList = ({ heading, pills, truncate }: { heading?: string; pills: string[], truncate?: boolean }) => {
    return (
        <div className={styles["pills-list-component"]}>
            {heading && <h4 className={styles["pills-list-heading"]}>{heading}</h4>}

            <div className={styles["pills-list"]}>
                {pills.map((pill, index) => {
                    return (!truncate || (truncate && index < 5)) ? (
                        <div
                            key={`pill-${pill}-${index}`}
                            className={styles["pill-container"]}
                            data-detect-scroll-in="0.1"
                            style={{ animationDelay: `${0.3 + (index * 0.05)}s` }}
                        >
                            <Pill text={pill} />
                        </div>
                    ) : null;
                })}

                {truncate && pills.length > 5 && (
                    <div className={styles["more-pills"]}>
                        +{pills.length - 5} {getMicroCopy("more")}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PillsList;