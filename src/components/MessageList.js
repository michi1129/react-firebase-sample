import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { messagesRef } from "../firebase";
import { query, onValue, orderByKey, limitToLast } from 'firebase/database';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const classes = useStyles();

  const queryRef = query(messagesRef, orderByKey(), limitToLast(3));

  onValue(queryRef, (snapshot) => {

    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      messages.push({ ...childData, key: childKey });
      setMessages(messages);
    });

  }, {
    onlyOnce: true
  });


  return (
    <div className={classes.root}>MessageList</div>
  )
};

export default MessageList;
