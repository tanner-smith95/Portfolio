import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import RichText from './richText';


const meta = {
    title: 'Components/Atoms/RichText',
    component: RichText,
    tags: ['autodocs'],
} satisfies Meta<typeof RichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: "<p>Full-stack JavaScript developer specializing in the development of composable/mobile-responsive React-based component libraries. I also have experience implementing backbone architectural features for handling composable sites in site generators like Next and Gatsby. I can model content in CMSs like Contentful and Contentstack and solution approaches for hooking these models up to component libraries. I also have experience as a tech lead. This has allowed me to manage developer workloads, perform code reviews, write technical documentation, and onboard new developers. I have back-end and DevOps experience with projects using a MACH or JAMstack approach. I can write migration scripts in Node.js, set up git pipelines and automated tests for PRs on GitHub, configure webhooks for third-party integrations, and configure site builds on hosting services like Netlify and Vercel.</p>",
    },
};