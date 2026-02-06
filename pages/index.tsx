import Image from "next/image";
import { client } from "../utils/graphql/client";
import { gql } from "@apollo/client";

export default function Home({ pageData, featured, experiences }: { pageData: unknown; featured?: unknown; experienceSectionTitle?: string; experiences?: unknown; }) {

  return (
    <div className="home-page-container">
      <main>

        <pre>{JSON.stringify(pageData, null, 2)}</pre>
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


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      pageData: pageData,
      featured: pageData?.featured,
      experienceSectionTitle: pageData?.experienceSectionTitle,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      experiences: (experiences as any)?.data?.projectCollection?.items || [],
    },
  }
}
