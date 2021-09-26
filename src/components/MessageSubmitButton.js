import React from "react";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'bbb', text });
        setText('');
      }}
    >
      <SendIcon />
    </IconButton >
  )
}

export default MessageSubmitButton;
