import LazyImage from "@/components/atoms/lazyImage/lazyImage";
import styles from "./project-showcase.module.scss";
import PillsList from "@/components/mollecules/pillsList/pillsList";
import RichText from "@/components/atoms/richText/richText";
import Button from "@/components/atoms/button/button";
import { useEffect, useRef } from "react";

export type ProjectShowcaseProps = {
    imageURL?: string;
    imageAlt?: string;
    title?: string;
    tools?: string[];
    description?: string;
    learnMoreText?: string;
};

export const ProjectShowcase = ({ imageURL, imageAlt, title, tools, description, learnMoreText = "Learn more" }: ProjectShowcaseProps) => {
    const truncatedRef = useRef<HTMLDivElement>(null);

    // Function to toggle truncated class based on content height
    function updateTruncation() {
        if (truncatedRef?.current) {
            if (truncatedRef.current.scrollHeight > truncatedRef.current.clientHeight) {
                truncatedRef.current.classList.add(styles.truncated);
            } else {
                truncatedRef.current.classList.remove(styles.truncated);
            }
        }
    }

    // Update truncated section styles on initial page loas
    useEffect(() => {
        updateTruncation();
    }, [truncatedRef.current]);

    // Update truncated section styles on window resize
    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            updateTruncation();
        });
    }

    return (
        <div className={`${styles["project-showcase-component"]} container-wide`}>
            <div className={styles.inner}>
                {imageURL && (<div className={styles["image-container"]}>
                    <LazyImage
                        src={imageURL}
                        alt={imageAlt}
                    />
                </div>)}

                <div className={styles["project-overview"]}>
                    <div className={styles.truncate} ref={truncatedRef}>
                        {title && (<h3>{title}</h3>)}

                        {tools && (<PillsList
                            heading="Tools & Languages"
                            pills={tools}
                        />)}

                        {description && (<RichText
                            content={description}
                        />)}
                    </div>

                    <Button
                        ariaLabel="Learn more"
                        onClick={() => { }}
                        text={learnMoreText}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;