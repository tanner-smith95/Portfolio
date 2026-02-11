import { client } from "../utils/graphql/client";
import { gql } from "@apollo/client";
import { ProfileBanner, ProfileBannerProps } from "../components/blocks/profileBanner/profileBanner";
import profileBannerConnector from "@/components/blocks/profileBanner/profileBannerConnector";
import styles from "./home.module.scss";
import ProjectShowcase, { ProjectShowcaseProps } from "@/components/blocks/projectShowcase/projectShowcase";
import projectShowcaseConnector from "@/components/blocks/projectShowcase/projectShowcaseConnector";
import { Fragment } from "react/jsx-runtime";

export default function Home({ pageData, featured, experiences }: { pageData: any; featured?: ProfileBannerProps; experienceSectionTitle?: string; experiences?: ProjectShowcaseProps[]; }) {

  return (
    <div className={styles["home-page-container"]}>
      <main className="content-gutter">
        {/* <pre>{JSON.stringify(pageData.featured, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify(experiences, null, 2)}</pre> */}

        {featured && (<ProfileBanner {...featured} />)}

        {experiences?.length && (
          <div className={`${styles["experience-section"]} container-wide`}>
            {pageData?.experienceSectionTitle && (
              <h2 className={styles["experience-header"]}>{pageData.experienceSectionTitle}</h2>
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


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pageData: pageData,
      featured: pageData?.featured ? profileBannerConnector(pageData.featured) : undefined,
      experienceSectionTitle: pageData?.experienceSectionTitle,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      experiences: parsedExperiences,
    },
  }
}
