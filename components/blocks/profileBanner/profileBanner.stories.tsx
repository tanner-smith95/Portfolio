import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProfileBanner from './profileBanner';


const meta = {
    title: 'Components/Blocks/ProfileBanner',
    component: ProfileBanner,
    parameters: {
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        headshotUrl: "https://images.ctfassets.net/5oswxgxbfxy6/7zJFLUXqQHJiZVJnVr7wLK/d420fa05a20427c360335fe3e1b0be28/tanner-medium.png",
        firstName: "Tanner",
        lastName: "Smith",
        role: "Frontend Architect / Technical Lead",
        tagline: "Software engineer with 7+ years of experience designing and developing composable React-based websites, strong collaboration and problem solving skills.",
        description: "<p>Full-stack JavaScript developer specializing in the development of composable/mobile-responsive React-based component libraries. I also have experience implementing backbone architectural features for handling composable sites in site generators like Next and Gatsby. I can model content in CMSs like Contentful and Contentstack and solution approaches for hooking these models up to component libraries. I also have experience as a tech lead. This has allowed me to manage developer workloads, perform code reviews, write technical documentation, and onboard new developers. I have back-end and DevOps experience with projects using a MACH or JAMstack approach. I can write migration scripts in Node.js, set up git pipelines and automated tests for PRs on GitHub, configure webhooks for third-party integrations, and configure site builds on hosting services like Netlify and Vercel.</p>",
    },
};