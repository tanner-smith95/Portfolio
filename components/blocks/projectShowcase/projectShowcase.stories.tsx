import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProjectShowcase from './projectShowcase';


const meta = {
    title: 'Components/Blocks/ProjectShowcase',
    component: ProjectShowcase,
    tags: ['autodocs'],
} satisfies Meta<typeof ProjectShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};