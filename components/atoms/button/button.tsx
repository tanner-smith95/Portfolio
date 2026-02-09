import styles from "./button.module.scss";

export const Button = ({ text, ariaLabel, onClick }: { text: string, ariaLabel?: string, onClick?: () => void }) => {
    return (
        <button className={styles["button-component"]} aria-label={ariaLabel} onClick={onClick}>{text}</button>
    );
};

export default Button;