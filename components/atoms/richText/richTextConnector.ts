import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

export function richTextConnector(data: Document) {
    // Define custom rendering options (optional)
    const options = {
        renderNode: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
                // Customize the output for embedded assets
                return `<img src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
            },
            // Add more custom renderers for other block types (e.g., BLOCKS.EMBEDDED_ENTRY)
        },
    };

    // Convert the document to an HTML string
    const htmlString = documentToHtmlString(data, options);

    return htmlString;
}

export default richTextConnector