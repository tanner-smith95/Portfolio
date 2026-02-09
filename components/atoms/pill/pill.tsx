import styles from "./pill.module.scss";

export const Pill = ({ text }: { text: string }) => {
    return (
        <div className={styles["pill-component"]}>{text}</div>
    );
};

export default Pill;