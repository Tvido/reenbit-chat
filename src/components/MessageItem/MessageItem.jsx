import React from 'react';

import './MessageItem.css';

import defaultAvatar from '../../assets/img/chuck_norris.jpg';

export const MessageItem = ({ user, avatar, message, date, owner }) => {
  let classes = "message"
  let image = null

  if (owner) {
    classes += " my_message"
  } else {
    classes += " other_message"
    image = <img src={avatar || defaultAvatar} alt={user} />
  }

  return (
    <div className={classes}>
      <div className="message_content">
        {image}
        <div className="message_text">
          {message}
        </div>
        <div className="message_time">{date}</div>
      </div>
    </div>
  );
};
