import React from 'react';
import { useAtom } from 'jotai';

import Button from '@mui/material/Button';

import { clickableAtom } from '../stores/fieldsStore';


const SubmitButton: React.FC = () => {
  // useAtomValue も使えます
  const [clickable, ] = useAtom(clickableAtom);

  return (
    <Button
      disabled={!clickable}
      size="large"
      variant="contained"
      fullWidth
    >
      困ったらオチに使えるよ
    </Button>
  );
};

export default SubmitButton;
