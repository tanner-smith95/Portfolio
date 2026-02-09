import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './button';


const meta = {
    title: 'Components/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Click me",
        ariaLabel: "Button Aria Label",
        onClick: () => { window.alert("Button clicked!") },
    },
};