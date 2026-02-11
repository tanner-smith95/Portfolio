import styles from "./button.module.scss";

export const Button = ({ text, ariaLabel, onClick, ref }:
    {
        text: string,
        ariaLabel?: string, onClick?: () => void,
        ref?: React.Ref<HTMLButtonElement>
    }) => {
    return (
        <button
            ref={ref}
            className={styles["button-component"]}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;