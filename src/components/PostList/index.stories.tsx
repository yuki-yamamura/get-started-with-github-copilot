import PostList from '.';
import { handlers } from '@/mocks/handlers';
import { expect, within } from '@storybook/test';
import { http, HttpResponse } from 'msw';
import { SWRConfig } from 'swr';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: PostList,
  decorators: [
    (Story) => (
      <SWRConfig value={{ provider: () => new Map() }}>
        <Story />
      </SWRConfig>
    ),
  ],
  parameters: {
    layout: 'centered',
    msw: {
      handlers,
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof PostList>;

export const FailurePattern: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://jsonplaceholder.typicode.com/posts', () => {
          return HttpResponse.json(null, { status: 403 });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const errorMessage = await canvas.findByText(/something went wrong/i);

    await expect(errorMessage).toBeInTheDocument();
  },
};

export const SuccessPattern: Story = {
  play: async ({ canvasElement }) => {
    const postTitles = [
      'sunt aut facere',
      'qui est esse',
      'ea molestias quasi',
    ];
    const canvas = within(canvasElement);

    const list = await canvas.findByRole('list');

    await expect(list).toBeInTheDocument();
    for (const title of postTitles) {
      void expect(
        canvas.getByRole('listitem', { name: new RegExp(title, 'i') }),
      ).toBeInTheDocument();
    }
  },
};

export default meta;
