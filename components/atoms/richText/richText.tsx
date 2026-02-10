import styles from "./rich-text.module.scss";

export const RichText = ({ content }: { content: string }) => {
    return (
        <div className={styles["rich-text"]} dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default RichText;