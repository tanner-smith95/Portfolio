import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Pill from './pill';


const meta = {
    title: 'Components/Atoms/Pill',
    component: Pill,
    tags: ['autodocs'],
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Pill Text",
    },
};