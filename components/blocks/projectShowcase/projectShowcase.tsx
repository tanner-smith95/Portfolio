import LazyImage from "@/components/atoms/lazyImage/lazyImage";
import styles from "./project-showcase.module.scss";
import PillsList from "@/components/mollecules/pillsList/pillsList";
import RichText from "@/components/atoms/richText/richText";
import Button from "@/components/atoms/button/button";
import { useEffect, useRef } from "react";

export const ProjectShowcase = () => {
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
    window.addEventListener("resize", () => {
        updateTruncation();
    });

    return (
        <div className={`${styles["project-showcase-component"]} container-wide`}>
            <div className={styles.inner}>
                <div className={styles["image-container"]}>
                    <LazyImage
                        src={"https://images.unsplash.com/photo-1638528785527-97bbe39cb139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ28lMjBtaW5pbWFsfGVufDF8fHx8MTc3MDIyMDg2N3ww&ixlib=rb-4.1.0&q=80&w=1080"}
                        alt={"test"}
                    />
                </div>

                <div className={styles["project-overview"]}>
                    <div className={styles.truncate} ref={truncatedRef}>
                        <h3>E-Commerce Platform Redesign</h3>

                        <PillsList
                            heading="Tools & Languages"
                            pills={[
                                'React',
                                'TypeScript',
                                'Node.js',
                                'GraphQL',
                                'Figma'
                            ]}
                        />

                        <RichText
                            content={`
                            <p class="mb-4">Led the complete redesign of TechCorp's flagship e-commerce platform, resulting in a 40% increase in conversion rates. Key achievements included:</p>
                            <ul class="list-disc list-inside mb-4 space-y-2"><li>Implemented a modern, responsive design system</li><li>Optimized checkout flow reducing cart abandonment by 25%</li><li>Integrated advanced search and filtering capabilities</li><li>Developed custom analytics dashboard for real-time insights</li></ul>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</P>
                        `}
                        />
                    </div>

                    <Button
                        ariaLabel="Learn more"
                        onClick={() => { }}
                        text="Learn more"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;