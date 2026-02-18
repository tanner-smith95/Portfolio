import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageNav from './pageNav';


const meta = {
    title: 'Components/Mollecules/PageNav',
    component: PageNav,
    tags: ['autodocs'],
} satisfies Meta<typeof PageNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};