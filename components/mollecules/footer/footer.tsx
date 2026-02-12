import styles from "./footer.module.scss";

const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5267 13.8067C11.6988 13.8858 11.8927 13.9038 12.0764 13.8579C12.2601 13.8121 12.4228 13.7049 12.5375 13.5542L12.8333 13.1667C12.9886 12.9598 13.1899 12.7917 13.4213 12.676C13.6527 12.5603 13.9079 12.5001 14.1667 12.5001H16.6667C17.1087 12.5001 17.5326 12.6757 17.8452 12.9882C18.1577 13.3008 18.3333 13.7247 18.3333 14.1667V16.6667C18.3333 17.1088 18.1577 17.5327 17.8452 17.8453C17.5326 18.1578 17.1087 18.3334 16.6667 18.3334C12.6884 18.3334 8.8731 16.7531 6.06005 13.94C3.24701 11.127 1.66666 7.31166 1.66666 3.33341C1.66666 2.89139 1.84225 2.46746 2.15481 2.1549C2.46737 1.84234 2.8913 1.66675 3.33332 1.66675H5.83332C6.27535 1.66675 6.69927 1.84234 7.01183 2.1549C7.32439 2.46746 7.49999 2.89139 7.49999 3.33341V5.83341C7.49999 6.09216 7.43975 6.34734 7.32404 6.57877C7.20832 6.8102 7.04032 7.0115 6.83332 7.16675L6.44332 7.45925C6.29034 7.57606 6.18251 7.74224 6.13815 7.92954C6.09379 8.11684 6.11564 8.31373 6.19999 8.48675C7.33889 10.8 9.21201 12.6707 11.5267 13.8067Z" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

)

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3334 5.83325L10.8409 10.6058C10.5866 10.7534 10.2978 10.8312 10.0038 10.8312C9.70974 10.8312 9.42094 10.7534 9.16669 10.6058L1.66669 5.83325" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16.6667 3.33325H3.33335C2.41288 3.33325 1.66669 4.07944 1.66669 4.99992V14.9999C1.66669 15.9204 2.41288 16.6666 3.33335 16.6666H16.6667C17.5872 16.6666 18.3334 15.9204 18.3334 14.9999V4.99992C18.3334 4.07944 17.5872 3.33325 16.6667 3.33325Z" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
)

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3333 6.66675C14.6594 6.66675 15.9312 7.19353 16.8688 8.13121C17.8065 9.0689 18.3333 10.3407 18.3333 11.6667V17.5001H15V11.6667C15 11.2247 14.8244 10.8008 14.5118 10.4882C14.1993 10.1757 13.7753 10.0001 13.3333 10.0001C12.8913 10.0001 12.4674 10.1757 12.1548 10.4882C11.8422 10.8008 11.6666 11.2247 11.6666 11.6667V17.5001H8.33331V11.6667C8.33331 10.3407 8.8601 9.0689 9.79778 8.13121C10.7355 7.19353 12.0072 6.66675 13.3333 6.66675Z" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.00002 7.5H1.66669V17.5H5.00002V7.5Z" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3.33335 5.00008C4.25383 5.00008 5.00002 4.25389 5.00002 3.33341C5.00002 2.41294 4.25383 1.66675 3.33335 1.66675C2.41288 1.66675 1.66669 2.41294 1.66669 3.33341C1.66669 4.25389 2.41288 5.00008 3.33335 5.00008Z" stroke="#D1D5DC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

)

export type FooterProps = {
    header?: string;
    phoneNumber?: string;
    emailAddress?: string;
    linkedInURL?: string;
}

export const Footer = ({
    header,
    phoneNumber,
    emailAddress,
    linkedInURL,
}: FooterProps) => {
    return (
        <div className={styles["footer-component"]}>
            <div className={`${styles["inner"]} container-wide content-gutter`}>
                {header && <h2 className={styles["contact-heading"]}>{header}</h2>}

                <div className={styles["contacts"]}>
                    {phoneNumber && (<a
                        href={`tel:${phoneNumber}`}
                        aria-label={`Call ${phoneNumber}`}
                        className={styles["contact"]}>
                        <PhoneIcon />
                        {phoneNumber}
                    </a>)}

                    {emailAddress && (<a
                        href={`mailto:${emailAddress}`}
                        aria-label={`Email ${emailAddress}`}
                        className={styles["contact"]}>
                        <EmailIcon />
                        {emailAddress}
                    </a>)}

                    {linkedInURL && (<a
                        href={linkedInURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile"
                        className={styles["contact"]}>
                        <LinkedInIcon />
                        Visit my LinkedIn profile
                    </a>)}
                </div>
            </div>
        </div>
    );
}

export default Footer;