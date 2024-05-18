import Counter from '.';
import { expect, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

type Story = StoryObj<typeof Counter>;

export const IncrementCounter: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const displayValue = canvas.getByRole('heading');
    const plusButton = canvas.getByRole('button', { name: '+' });

    await expect(displayValue).toHaveTextContent('0');

    await userEvent.click(plusButton);
    await expect(displayValue).toHaveTextContent('1');
  },
};

export default meta;
