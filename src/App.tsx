import React from 'react';
import './App.css';

import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';

import EmailField from '../src/components/EmailField';
import PasswordField from '../src/components/PasswordField';
import SubmitButton from '../src/components/SubmitButton';

import { emailAtom, passwordAtom } from './stores/fieldsStore';
import { useAtom } from 'jotai';

const contentsBox = css({
  margin: '3rem auto',
  width: '90%',
  maxWidth: '720px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
});

function App() {
  // useAtomValueも使えます
  const [email, ] = useAtom(emailAtom);
  const [password, ] = useAtom(passwordAtom)

  return (
    <div css={contentsBox}>
      <Typography>メールアドレス：{email}</Typography>
      <Typography>パスワード：{password}</Typography>
      <EmailField />
      <PasswordField />
      <SubmitButton />
    </div>
  );
}

export default App;
