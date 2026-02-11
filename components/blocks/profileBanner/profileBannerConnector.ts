import richTextConnector from "@/components/atoms/richText/richTextConnector";
import { ProfileBannerProps } from "./profileBanner";

// A function to parse raw Contentful profile data to be used by the profile banner component
export function profileBannerConnector(data: any): ProfileBannerProps {


    return {
        headshotUrl: data?.headshot?.url || null,
        firstName: data?.firstName || null,
        lastName: data?.lastName || null,
        role: data?.jobTitle || null,
        tagline: data?.tagline || null,
        description: data?.about?.json ? (richTextConnector(data.about.json)) : undefined,
    };
}

export default profileBannerConnector;