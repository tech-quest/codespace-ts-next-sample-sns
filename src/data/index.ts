import { accounts } from './accounts';
import { posts } from './posts';

type Post = {
  id: number;
  content: string;
  account: { id: number; name: string; displayName: string; image: string };
  postedAt: string;
};

export const fetchPosts = (): Post[] => {
  return posts
    .map((post) => {
      const account = accounts.find((account) => account.id === post.accountId);
      if (!account) return null;

      return {
        id: post.id,
        content: post.content,
        account: {
          id: account.id,
          name: account.name,
          displayName: account.displayName,
          image: account.image,
        },
        postedAt: post.postedAt,
      };
    })
    .filter(isPost);
};

export const fetchFriends = () => {
  return accounts.filter((account) => account.id !== 1);
};

const isPost = (post: Post | null): post is Post => {
  return post !== null;
};
