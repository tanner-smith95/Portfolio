import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PillsList from './pillsList';


const meta = {
    title: 'Components/Mollecules/PillsList',
    component: PillsList,
    tags: ['autodocs'],
} satisfies Meta<typeof PillsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        heading: "Test Pills List",
        pills: ["Pill 1", "Pill 2", "Pill 3"],
    },
};