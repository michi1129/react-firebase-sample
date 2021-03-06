import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageField";
import MessageSubmitButton from "./MessageSubmitButton";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  }
})

const MessageInputField = ({ name }) => {
  const inputElement = useRef(null);

  const classes = useStyles();

  const avatarPath = gravatarPath(name);

  const [text, setText] = useState('');

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField ref={inputElement} text={text} setText={setText} name={name} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton name={name} text={text} setText={setText} inputElement={inputElement} />
        </Grid>
      </Grid>
    </div>
  )
};

export default MessageInputField;
