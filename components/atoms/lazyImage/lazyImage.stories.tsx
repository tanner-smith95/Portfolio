import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LazyImage from './lazyImage';


const meta = {
    title: 'Components/Atoms/LazyImage',
    component: LazyImage,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <div style={{ position: "relative", width: '50vw', margin: '0 auto', height: '50vw' }}>
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof LazyImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lazy: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1770013277247-ab7a08d3d9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzAyMjA4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Test Alt Text",
    },
};

export const Eager: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1770013277247-ab7a08d3d9ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzAyMjA4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Test Alt Text",
        disableLazy: true,
    },
};