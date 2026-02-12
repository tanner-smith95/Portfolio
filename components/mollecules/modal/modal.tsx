import styles from "./modal.module.scss";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

export type ModalProps = {
    children?: ReactNode;
    closeButtonAreaLabel?: string;
    triggerElements: RefObject<HTMLElement | null>[]
};

export const Modal = ({ children, closeButtonAreaLabel = "Close modal", triggerElements }: ModalProps) => {

    const [open, setOpen] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null);

    // Add listeners ffor passed trigger elements to toggle the modal
    useEffect(() => {
        for (const trigger of triggerElements) {
            trigger?.current?.addEventListener("click", () => {
                // Use data attribute that reflects the state so close triggers from outside of
                // the component can be added in the triggerElements array
                setOpen(!(modalRef?.current?.dataset?.open === "true"))
            })
        }
    }, [triggerElements])

    return (
        <div className={`${styles["modal-component"]} ${open ? styles.open : ""}`} data-open={`${open}`} ref={modalRef}>
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