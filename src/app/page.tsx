'use client';

import { useState } from 'react';

import { Button } from '~/components/elements/buttons/button';
import { MyMultilineString } from '~/components/elements/typographies/multiline-string';

import { PostField } from './components/post-field';
import styles from './styles.module.css';

export default function HomePage() {
  const [disabled, setDisabled] = useState(false);

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
            <div className={styles.name}>投稿者A</div>
            <div className={styles.identity}>@accountId</div>
          </div>
          <p>
            <MyMultilineString value="今日は晴れですね。" />
          </p>
        </PostField>
        <PostField thumbnail="/images/photo-profile-03.jpg">
          <div className={styles.poster}>
            <div className={styles.name}>投稿者B</div>
            <div className={styles.identity}>@accountId</div>
          </div>
          <p>
            <MyMultilineString
              value={`Web の世界では \\n は改行を表す特別な文字です。\n\n\\n を <br> タグに変換することで HTML の改行として表示させることができます。`}
            />
          </p>
        </PostField>
      </div>
    </div>
  );
}
