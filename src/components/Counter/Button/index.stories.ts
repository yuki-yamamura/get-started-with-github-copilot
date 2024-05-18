import Button from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: '眠りの浅い夜',
  },
};

export default meta;
