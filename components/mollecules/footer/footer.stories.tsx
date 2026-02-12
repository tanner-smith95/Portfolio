import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from './footer';


const meta = {
    title: 'Components/Mollecules/Footer',
    component: Footer,
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        header: "Contact Me",
        phoneNumber: "+1 (423) 707-4934",
        emailAddress: "tanner@example.com",
        linkedInURL: "https://www.linkedin.com/in/tanner-smith-344992190/",
    },
};