import { useEffect, useRef, useState } from "react";
import styles from "./page-nav.module.scss";


export const PageNav = () => {
    const navRef = useRef<HTMLElement>(null);
    const [navItems, setNavItems] = useState<Element[]>([]);

    useEffect(() => {

        if (typeof document !== "undefined") {
            const sections = document.querySelectorAll("[data-nav-title]");
            setNavItems(Array.from(sections));
        }
    }, [])



    return navItems.length ? (
        <nav ref={navRef} className={styles["page-nav-component"]}>
            <div className={`${styles["inner"]} container-wide content-gutter`}>
                {navItems.map((item, index) => {
                    return (
                        <div
                            className={styles["nav-item"]}
                            key={`page-nav-item-${index}`}
                            // Scroll to corresponding page element on click
                            onClick={() => {
                                (item as HTMLElement).style.scrollMarginTop =
                                    `${(navRef?.current?.clientHeight || 0) + 16}px`; // Account for nav height offset
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