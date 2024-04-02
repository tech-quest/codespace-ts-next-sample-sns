'use client';

import Link from 'next/link';

import { fetchFriends } from '~/data';

import { ProfileField } from './components/profile-field';
import styles from './styles.module.css';

export default function FriendsPage() {
  // MEMO: 表示用の投稿一覧データを取得
  const friends = fetchFriends();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link href="/" className={styles.back}>
          ←
        </Link>
        <h1 className={styles.heading}>フレンド一覧</h1>
      </div>
      <div className={styles.friends}>
        {/* 取得したデータを HTML 形式に変換して表示させる */}
        {friends.map((friend) => (
          <ProfileField key={friend.id} thumbnail={friend.image}>
            <div className={styles.name}>{friend.displayName}</div>
            <div className={styles.identity}>@{friend.name}</div>
            <p>{friend.bio}</p>
          </ProfileField>
        ))}
      </div>
    </div>
  );
}
