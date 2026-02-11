import styles from "./modal.module.scss";
import { ReactNode, RefObject, useEffect, useState } from "react";

export type ModalProps = {
    children?: ReactNode;
    closeButtonAreaLabel?: string;
    triggerElements: RefObject<HTMLElement | null>[]
};

export const Modal = ({ children, closeButtonAreaLabel = "Close Modal", triggerElements }: ModalProps) => {

    const [open, setOpen] = useState(false)

    // Add listeners ffor passed trigger elements to toggle the modal
    useEffect(() => {
        for (const trigger of triggerElements) {
            trigger?.current?.addEventListener("click", () => {
                setOpen(!open)
            })
        }
    }, [triggerElements])

    return (
        <div className={`${styles["modal-component"]} ${open ? styles.open : ""}`}>
            <div className={styles["modal-header"]}>
                <button
                    aria-label={closeButtonAreaLabel}
                    className={styles["modal-close-button"]}
                    onClick={() => {
                        setOpen(false)
                    }}
                >
                    ✕
                </button>
            </div>

            <div className={styles["modal-content"]}>
                {children}
            </div>
        </div>
    );
};

export default Modal;