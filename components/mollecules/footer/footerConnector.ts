import { getMicroCopy } from "@/utils/microsopy/microcopy";
import { FooterProps } from "./footer";

export const footerConnector = (data: any): FooterProps => {

    return {
        header: getMicroCopy("contactMe"),
        phoneNumber: data?.phoneNumber,
        emailAddress: data?.emailAddress,
        linkedInURL: data?.linkedInProfile,
    }
};

export default footerConnector;