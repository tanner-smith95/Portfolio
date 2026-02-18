import { useEffect, useRef, useState } from "react";
import styles from "./page-nav.module.scss";


export const PageNav = () => {
    const navRef = useRef<HTMLElement>(null);
    const [navItems, setNavItems] = useState<Element[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const NAV_OFFSET = 16; // Offset in pixels to trigger active state change when section overlaps with the nav

    useEffect(() => {

        if (typeof document !== "undefined") {
            const sections = document.querySelectorAll("[data-nav-title]");
            setNavItems(Array.from(sections));
        }
    }, [])

    useEffect(() => {

        window.addEventListener("scroll", () => {
            const navRect = navRef?.current?.getBoundingClientRect();

            // Always set the last nav item to active when scrolled to the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setActiveIndex(navItems.length - 1);

                // Otherwise, set the active nav item based on section overlap with the nav
            } else {
                // Set active state based on section overlap with the nav
                if (navRect) {
                    for (let i = 0; i < navItems.length; i++) {
                        const item = navItems[i];
                        const itemRect = item.getBoundingClientRect();

                        if (
                            navRect.bottom > itemRect.top - NAV_OFFSET &&
                            navRect.top < itemRect.bottom
                        ) {
                            setActiveIndex(i)
                        }
                    }
                }
            }
        })
    }, [navItems])



    return navItems.length ? (
        <nav ref={navRef} className={styles["page-nav-component"]}>
            <div className={`${styles["inner"]} container-wide content-gutter`}>
                {navItems.map((item, index) => {
                    return (
                        <div
                            className={`${styles["nav-item"]} ${activeIndex === index ? styles["active"] : ""}`}
                            key={`page-nav-item-${index}`}
                            // Scroll to corresponding page element on click
                            onClick={() => {
                                (item as HTMLElement).style.scrollMarginTop =
                                    `${(navRef?.current?.clientHeight || 0) + NAV_OFFSET}px`; // Account for nav height offset
                                item?.scrollIntoView({ behavior: "smooth" });
                            }}
                            role="button"
                            tabIndex={0}
                            // Handle Enter key presses
                            onKeyDown={(e) => {
                                if (e?.key === "Enter") {
                                    const castElt = e?.target as HTMLElement;
                                    castElt?.click();
                                }
                            }}
                        >
                            {item.getAttribute("data-nav-title")}
                        </div>
                    )
                })}
            </div>
        </nav>
    ) : null;
}

export default PageNav;