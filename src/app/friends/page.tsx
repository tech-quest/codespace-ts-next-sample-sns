'use client';

import Link from 'next/link';

import { ProfileField } from './components/profile-field';
import styles from './styles.module.css';

export default function FriendsPage() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link href="/" className={styles.back}>
          ←
        </Link>
        <h1 className={styles.heading}>フレンド一覧</h1>
      </div>
      <div className={styles.friends}>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>投稿者A</div>
          <div className={styles.identity}>@accountId</div>
          <p>よろしくお願いします！</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-03.jpg">
          <div className={styles.name}>投稿者B</div>
          <div className={styles.identity}>@accountId</div>
          <p>Web に関する役立つ Tips を投稿してます。</p>
        </ProfileField>
      </div>
    </div>
  );
}
