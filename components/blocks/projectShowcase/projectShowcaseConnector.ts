import richTextConnector from "@/components/atoms/richText/richTextConnector";
import { ProjectShowcaseProps } from "./projectShowcase";
import { getMicroCopy } from "@/utils/microsopy/microcopy";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function projectShowcaseConnector(data: any): ProjectShowcaseProps {

    const tools = [];

    for (const tool of data?.skillsCollection?.items || []) {
        tools?.push(tool?.skillName)
    }


    return {
        imageURL: data?.featuredImage?.url,
        imageAlt: data?.featuredImage?.description,
        title: data?.projectName,
        tools: tools,
        description: data?.projectDescription?.json ? (richTextConnector(data.projectDescription.json)) : undefined,
        learnMoreText: getMicroCopy("learnMore"),
    };
}

export default projectShowcaseConnector;