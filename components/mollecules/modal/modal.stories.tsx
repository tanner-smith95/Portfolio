import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from './modal';
import { useRef } from 'react';
import Button from '@/components/atoms/button/button';


const meta = {
    title: 'Components/Mollecules/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

    render: (args) => {
        const triggerRef = useRef<HTMLButtonElement>(null);
        return (
            <div>
                <Button text="Toggle modal" ref={triggerRef} />
                <Modal {...args} triggerElements={[triggerRef]} />
            </div>
        )
    },
    args: {
        children: <p className='container-wide content-gutter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>,
        closeButtonAreaLabel: "Close Modal",
        triggerElements: []
    },
};