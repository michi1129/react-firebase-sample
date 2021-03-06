import { List, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { messagesRef } from "../firebase";
import { query, onValue, orderByKey, limitToLast } from 'firebase/database';
import MessageItem from "./MessageItem";

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: '100%',
    overflow: 'auto',
  }
})

const MessageList = () => {

  const [messages, setMessages] = useState([]);

  const classes = useStyles();

  const queryRef = query(messagesRef, orderByKey(), limitToLast(15));

  useEffect(() => {

    onValue(queryRef, (snapshot) => {

      const newMessages = [...messages];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        newMessages.push({ ...childData, key: childKey });
      });

      setMessages(newMessages);

    }, {
      onlyOnce: false
    });

  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {
        messages.map(({ key, name, text }, index) => {
          const isLastItem = length === index + 1;
          return (
            <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />
          )
        })
      }
    </List >
  );
};

export default MessageList;
