import React from 'react';
import { useAtom } from 'jotai';

import TextField from '@mui/material/TextField';

import {
  passwordAtom,
  passwordIsErrorAtom
} from '../stores/fieldsStore';

const PasswordField: React.FC = () => {
  // 本当は再利用性上げるために、propsで渡した方がいいとは思います。
  const [password, setPassword] = useAtom(passwordAtom);
  const [passwordIsError] = useAtom(passwordIsErrorAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  return (
    <TextField
      type="password"
      label="パスワード"
      value={password}
      error={passwordIsError}
      helperText={passwordIsError && "パスワードの形式が正しくありません"}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  )
}

export default PasswordField;
