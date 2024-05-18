import useSWR from 'swr';

import type { Post } from '@/types/Post';

const PostList = () => {
  const { data, isLoading } = useSWR<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
    async (url: string) => {
      const res = await fetch(url);
      const data = (await res.json()) as Post[];

      return data;
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id} aria-label={post.title}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
