import React from 'react';
import { Fab } from '@material-ui/core';

export default function RoundBtn ({ text, onClick, disabled }) {
  return (
    <div>
      <Fab
        variant="round"
        color="default"
        size="large"
        children={text}
        onClick={onClick}
        disabled={disabled}
    />
    </div>
  )
}
