import LazyImage from "@/components/atoms/lazyImage/lazyImage";
import styles from "./project-showcase.module.scss";
import PillsList from "@/components/mollecules/pillsList/pillsList";
import RichText from "@/components/atoms/richText/richText";
import Button from "@/components/atoms/button/button";
import { useEffect, useRef } from "react";
import Modal from "@/components/mollecules/modal/modal";
import { getMicroCopy } from "@/utils/microsopy/microcopy";

export type ProjectShowcaseProps = {
    imageURL?: string;
    imageAlt?: string;
    title?: string;
    tools?: string[];
    description?: string;
    learnMoreText?: string;
    invertLayout?: boolean;
};

export const ProjectShowcase = ({
    imageURL,
    imageAlt,
    title,
    tools,
    description,
    learnMoreText = "Learn more",
    invertLayout = false
}: ProjectShowcaseProps) => {
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

    // Ref for the learn more modal trigger button
    const triggerRef = useRef<HTMLButtonElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    return (
        <div className={`${styles["project-showcase-component"]} container-wide ${invertLayout ? styles.inverted : ""}`}>
            <div className={styles.inner}>
                {imageURL && (
                    <div className={styles["image-container"]} data-detect-scroll-in="0.3">
                        <LazyImage
                            src={imageURL}
                            alt={imageAlt}
                        />
                    </div>)}

                <div className={styles["project-overview"]}>
                    {/* Project Overview truncated description */}
                    <div className={styles.truncate} data-detect-scroll-in="0.1" ref={truncatedRef}>
                        {title && (<h3>{title}</h3>)}

                        {tools && (<PillsList
                            heading="Tools & Languages"
                            pills={tools}
                        />)}

                        {description && (
                            <RichText
                                content={description}
                            />
                        )}
                    </div>

                    <Button
                        ariaLabel="Learn more"
                        ref={triggerRef}
                        text={learnMoreText}
                    />
                </div>

                {/* Learn More Modal */}
                <Modal triggerElements={[triggerRef, closeRef]}>
                    <div className={`${styles["modal-content"]} container-wide content-gutter`}>
                        {imageURL && (<div className={styles["modal-image-container"]}>
                            <LazyImage
                                src={imageURL}
                                alt={imageAlt}
                            />
                        </div>)}


                        {title && (<h3>{title}</h3>)}

                        {tools && (<PillsList
                            heading="Tools & Languages"
                            pills={tools}
                        />)}

                        {description && (<RichText
                            content={description}
                        />)}

                        <Button
                            className={styles["modal-content-close-button"]}
                            ariaLabel={getMicroCopy("close")}
                            ref={closeRef}
                            text={getMicroCopy("close")}
                        />
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ProjectShowcase;