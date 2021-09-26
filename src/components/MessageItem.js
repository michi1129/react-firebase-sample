import React, { useEffect, useRef } from "react";
import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar, makeStyles } from "@material-ui/core";
import { gravatarPath } from "../gravatar";

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ name, text, isLastItem }) => {
  const classes = useStyles();

  const avatarPath = gravatarPath(name);

  const ref = useRef(null);

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]);

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
