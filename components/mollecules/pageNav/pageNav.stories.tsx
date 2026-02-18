import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageNav from './pageNav';


const meta = {
    title: 'Components/Mollecules/PageNav',
    component: PageNav,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div>
                <Story />

                <div data-nav-title="Section 1" style={{ height: '75vh' }}>
                    <h2>Section 1</h2>
                </div>

                <div data-nav-title="Section 2" style={{ height: '75vh' }}>
                    <h2>Section 2</h2>
                </div>

                <div data-nav-title="Section 3" style={{ height: '75vh' }}>
                    <h2>Section 3</h2>
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof PageNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    },
};