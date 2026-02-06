
// A function to parse raw Contentful profile data to be used by the profile banner component

import richTextConnector from "@/components/atoms/richText/richTextConnector";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function profileBannerConnector(data: any) {


    return {
        headshotUrl: data?.headshot?.url || null,
        firstName: data?.firstName || null,
        lastName: data?.lastName || null,
        role: data?.jobTitle || null,
        tagline: data?.tagline || null,
        description: data?.about?.json ? (richTextConnector(data.about.json)) : null,
    };
}

export default profileBannerConnector;