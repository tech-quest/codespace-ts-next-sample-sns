'use client';

import { useState } from 'react';

import { Button } from '~/components/elements/buttons/button';
import { MyMultilineString } from '~/components/elements/typographies/multiline-string';

// MEMO: 投稿を表示するための見た目をコンポーネントとして作成して重複したコードを避ける
import { PostField } from './components/post-field';
// MEMO: CSS Modules という機能を使ってスタイルを設定する
// 参考: https://nextjs.org/docs/app/building-your-application/styling/css-modules
import styles from './styles.module.css';

export default function HomePage() {
  // MEMO: 未入力時に Post ボタンを無効化させるための state を作成
  const [disabled, setDisabled] = useState(true);

  // MEMO: テキストエリアの入力値が変更された際に Post ボタンの有効・無効を切り替える
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
