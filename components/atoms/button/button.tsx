import styles from "./button.module.scss";

export const Button = ({ text, ariaLabel, onClick, ref, className }:
    {
        text: string,
        ariaLabel?: string, onClick?: () => void,
        ref?: React.Ref<HTMLButtonElement>,
        className?: string
    }) => {
    return (
        <button
            ref={ref}
            className={`${styles["button-component"]} ${className ? className : ""}`}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;