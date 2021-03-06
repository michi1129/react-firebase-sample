import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase";

const MessageField = ({ name, text, setText, inputElement }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      autoFocus
      inputRef={inputElement}
      value={text}
      fullWidth={true}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          pushMessage({ name, text });
          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}></TextField>
  );
};

export default MessageField;
