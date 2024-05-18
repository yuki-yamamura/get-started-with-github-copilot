import PostList from '.';
import { handlers } from '@/mocks/handlers';
import { expect, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: PostList,
  parameters: {
    layout: 'centered',
    msw: {
      handlers,
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof PostList>;

export const SuccessPattern: Story = {
  play: async ({ canvasElement }) => {
    const postTitles = [
      'sunt aut facere',
      'qui est esse',
      'ea molestias quasi',
    ];
    const canvas = within(canvasElement);

    const list = canvas.getByRole('list');

    await expect(list).toBeInTheDocument();
    for (const title of postTitles) {
      void expect(
        canvas.getByRole('listitem', { name: new RegExp(title, 'i') }),
      ).toBeInTheDocument();
    }
  },
};

export default meta;
