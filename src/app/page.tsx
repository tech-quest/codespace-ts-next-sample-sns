'use client';

import { useEffect, useState } from 'react';

import { Button } from '~/components/elements/buttons/button';
import { MyMultilineString } from '~/components/elements/typographies/multiline-string';
import { Post, fetchMyAccount, fetchPosts } from '~/data';

import { PostField } from './components/post-field';
import styles from './styles.module.css';

export default function HomePage() {
  // MEMO: 画面を更新できるように、投稿のリストと投稿内容をステートで管理
  const [posts, setPosts] = useState<Post[]>([]);
  const [postValue, setPostValue] = useState('');

  const [disabled, setDisabled] = useState(true);

  // MEMO: 投稿リストを取得して、初期表示用に posts ステートを更新する
  useEffect(() => {
    const initialPosts = fetchPosts();
    setPosts(initialPosts);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostValue(e.target.value);
    setDisabled(e.target.value === '');
  };

  const handleSubmit = () => {
    // MEMO: 自分のアカウント情報を取得
    const myAccount = fetchMyAccount();

    // MEMO: 投稿データを作成
    const post = {
      id: posts.length + 1,
      content: postValue,
      account: {
        id: myAccount.id,
        name: myAccount.name,
        displayName: myAccount.displayName,
        image: myAccount.image,
      },
      postedAt: new Date().toLocaleString(),
    };

    // MEMO: 投稿データを posts ステートに追加
    setPosts([post, ...posts]);

    // MEMO: 投稿フォームをリセット
    setPostValue('');
  };

  return (
    <div className={styles.root}>
      <PostField thumbnail="/images/photo-profile-01.jpg">
        <textarea placeholder="今何してる？" className={styles.textarea} onChange={handleChange} />
        <div className={styles.action}>
          <Button type="button" isDisabled={disabled} onClick={handleSubmit}>
            Post
          </Button>
        </div>
      </PostField>
      <div className={styles.timelines}>
        {posts.map((post) => (
          <PostField key={post.id} thumbnail={post.account.image}>
            <div className={styles.poster}>
              <div className={styles.name}>{post.account.displayName}</div>
              <div className={styles.identity}>
                @{post.account.name} {post.postedAt}
              </div>
            </div>
            <p>
              <MyMultilineString value={post.content} />
            </p>
          </PostField>
        ))}
      </div>
    </div>
  );
}
