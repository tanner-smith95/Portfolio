import { client } from "../utils/graphql/client";
import { gql } from "@apollo/client";
import { ProfileBanner, ProfileBannerProps } from "../components/blocks/profileBanner/profileBanner";
import profileBannerConnector from "@/components/blocks/profileBanner/profileBannerConnector";
import styles from "./home.module.scss";
import ProjectShowcase, { ProjectShowcaseProps } from "@/components/blocks/projectShowcase/projectShowcase";
import projectShowcaseConnector from "@/components/blocks/projectShowcase/projectShowcaseConnector";
import { Fragment } from "react/jsx-runtime";
import Footer, { FooterProps } from "@/components/mollecules/footer/footer";
import footerConnector from "@/components/mollecules/footer/footerConnector";
import PageNav from "@/components/mollecules/pageNav/pageNav";

export type HomePageProps = {
  pageData: any;
  featured?: ProfileBannerProps;
  experienceSectionTitle?: string;
  experiences?: ProjectShowcaseProps[];
  footerData?: FooterProps
}

export default function Home({ pageData, featured, experiences, footerData }: HomePageProps) {

  return (
    <>
      <PageNav />

      <div className={styles["home-page-container"]}>

        <main className="content-gutter">
          {/* <pre>{JSON.stringify(pageData.featured, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(experiences, null, 2)}</pre> */}

          {featured && (
            // TO-DO: Make nav title Editable in CMS
            <div data-nav-title="About Me">
              <ProfileBanner {...featured} />
            </div>
          )}

          {experiences?.length && (
            // TO-DO: Make nav title Editable in CMS
            <div data-nav-title="Experience" className={`${styles["experience-section"]} container-wide`}>
              {pageData?.experienceSectionTitle && (
                <h2 className={styles["experience-header"]} data-detect-scroll-in="1.0">{pageData.experienceSectionTitle}</h2>
              )}

              <div className={styles["experiences-list"]}>
                {experiences?.map((experience, index) => {
                  return (<Fragment key={`project-overview-${index}`}>
                    <ProjectShowcase {...experience} invertLayout={index % 2 === 1} />
                  </Fragment>)
                })}
              </div>

            </div>
          )}
        </main>
      </div>

      {footerData && (
        // TO-DO: Make nav title Editable in CMS
        <div data-nav-title="Contact Me">
          <Footer {...footerData} />
        </div>
      )}
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {

  const rawData = await client
    .query({
      query: gql`
        query HomeFeaturedQuery {
          homePageCollection {
            items {
              featured {
                about {
                  json
                }
                emailAddress
                firstName
                headshot {
                  url
                  title
                }
                jobTitle
                lastName
                phoneNumber
                linkedInProfile
                tagline
              }
              experienceSectionTitle
              experienceCollection {
                items {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
    `,
    })
    .then((result) => { return result });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageData = (rawData as any)?.data?.homePageCollection?.items?.[0];

  const experienceIDs = [];

  // Extract experience section project IDs to query them separately
  for (const project of pageData?.experienceCollection?.items) {
    if (project?.sys?.id) {
      experienceIDs.push(project.sys.id);
    }
  }

  const experiences = await client
    .query({
      query: gql`
        query ProjectCollection {
          projectCollection(
            where: {
              sys: {
                id_in: ${JSON.stringify(experienceIDs)}
              }
            }
          ) {
            items {
              featuredImage {
                url
                title
                description
              }
              projectDescription {
                json
              }
              projectName
              skillsCollection {
                items {
                  skillType
                  skillName
                }
              }
            }
          }
        }
    `,
    })
    .then((result) => { return result });

  // Parse the raw experiences data
  const parsedExperiences = [];
  for (const experience of (experiences as any)?.data?.projectCollection?.items || []) {
    parsedExperiences.push(projectShowcaseConnector(experience));
  }

  // Parse the footert data from the featured person
  const footerData = footerConnector(pageData?.featured);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pageData: pageData,
      featured: pageData?.featured ? profileBannerConnector(pageData.featured) : undefined,
      experienceSectionTitle: pageData?.experienceSectionTitle,
      experiences: parsedExperiences,
      footerData: footerData,
    },
  }
}
