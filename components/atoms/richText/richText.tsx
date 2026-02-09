export const RichText = ({ content }: { content: string }) => {
    return (
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default RichText;