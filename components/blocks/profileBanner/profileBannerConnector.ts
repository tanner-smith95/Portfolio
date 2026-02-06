
// A function to parse raw Contentful profile data to be used by the profile banner component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function profileBannerConnector(data: any) {


    return {
        headshotUrl: data?.headshot?.url,
        firstName: data?.firstName,
        lastName: data?.lastName,
        role: data?.jobTitle,
        tagline: data?.tagline,
        // description: data?.description,
    };
}

export default profileBannerConnector;