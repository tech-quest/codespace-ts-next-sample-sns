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
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
        <ProfileField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.name}>DUMMY 投稿者</div>
          <div className={styles.identity}>@DUMMYId</div>
          <p>DUMMY DUMMY DUMMY</p>
        </ProfileField>
      </div>
    </div>
  );
}
