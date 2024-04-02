'use client';

import { useState } from 'react';

import { Button } from '~/components/elements/buttons/button';
import { MyMultilineString } from '~/components/elements/typographies/multiline-string';
import { fetchPosts } from '~/data';

import { PostField } from './components/post-field';
import styles from './styles.module.css';

export default function HomePage() {
  // MEMO: 表示用の投稿一覧データを取得
  const posts = fetchPosts();

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDisabled(e.target.value === '');
  };

  return (
    <div className={styles.root}>
      <PostField thumbnail="/images/photo-profile-01.jpg">
        <textarea placeholder="今何してる？" className={styles.textarea} onChange={handleChange} />
        <div className={styles.action}>
          <Button type="button" isDisabled={disabled}>
            Post
          </Button>
        </div>
      </PostField>
      <div className={styles.timelines}>
        {/* 取得したデータを HTML 形式に変換して表示させる */}
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
