import { useEffect, useRef, useState } from "react";
import styles from "./page-nav.module.scss";

const NAV_OFFSET = 16; // Offset in pixels to trigger active state change when section overlaps with the nav


// DESKTOP NAV
const PageNavDesktop = () => {
    const navRef = useRef<HTMLElement>(null);
    const [navItems, setNavItems] = useState<Element[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

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
        <nav ref={navRef} className={styles["page-nav-desktop-component"]}>
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

// MOBILE NAV
const PageNavMobile = () => {
    const navRef = useRef<HTMLElement>(null);
    const [navItems, setNavItems] = useState<Element[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

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

    // Chevron icon for the mobile nav modal trigger
    const ChevronDown = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 7.49991L9.99994 12.4998L14.9999 7.49991" stroke="#D1D5DC" strokeWidth="1.66665" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )

    return (
        <nav ref={navRef} className={styles["page-nav-mobile-component"]}>
            <div className={`${styles["active-item"]} container-wide content-gutter`}>
                {navItems?.[activeIndex]?.getAttribute("data-nav-title")}

                <ChevronDown />
            </div>
        </nav>
    )
}


export const PageNav = () => {
    return (
        <>
            <PageNavDesktop />
            <PageNavMobile />
        </>
    )
}

export default PageNav;