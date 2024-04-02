'use client';

import { useState } from 'react';

import { Button } from '~/components/elements/buttons/button';
import { MyMultilineString } from '~/components/elements/typographies/multiline-string';

import { PostField } from './components/post-field';
import styles from './styles.module.css';

export default function HomePage() {
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
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value="DUMMY DUMMY DUMMY" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-02.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>DUMMY 投稿者</div>
            <div className={styles.identity}>@DUMMYId</div>
          </div>
          <p>
            <MyMultilineString value={`改行の場合は \\n を渡す。\n\nDUMMY DUMMY DUMMY`} />
          </p>
        </PostField>
      </div>
    </div>
  );
}
