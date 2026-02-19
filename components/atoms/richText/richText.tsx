import styles from "./rich-text.module.scss";

export const RichText = ({ content, className }: { content: string, className?: string }) => {
    return (
        <div className={`${styles["rich-text"]} ${className || ""}`} dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default RichText;