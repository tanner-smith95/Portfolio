import { getMicroCopy } from "@/utils/microsopy/microcopy";
import styles from "./modal.module.scss";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

export type ModalProps = {
    children?: ReactNode;
    closeButtonAreaLabel?: string;
    triggerElements: RefObject<HTMLElement | null>[]
};

export const Modal = ({ children, closeButtonAreaLabel = getMicroCopy("closeModal"), triggerElements }: ModalProps) => {

    const [open, setOpen] = useState(false)
    const [triggersInitialized, setTriggersInitialized] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);


    // Add listeners ffor passed trigger elements to toggle the modal
    useEffect(() => {
        if (triggerElements?.length && !triggersInitialized) {
            setTriggersInitialized(true);

            for (const trigger of triggerElements) {
                trigger?.current?.addEventListener("click", () => {
                    // Use data attribute that reflects the state so close triggers from outside of
                    // the component can be added in the triggerElements array
                    setOpen(!(modalRef?.current?.dataset?.open === "true"))
                })
            }
        }
    }, [triggerElements])

    // Disable page level scroll while the modal is open
    useEffect(() => {
        if (open) {
            document?.body?.classList?.add("disable-scroll");

            // Set the modal scroll to the top whenever it's opened
            if (modalRef?.current) {
                modalRef.current.scrollTop = 0
            }
        } else {
            document?.body?.classList?.remove("disable-scroll");
        }
    }, [open])

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