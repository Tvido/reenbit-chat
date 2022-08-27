import React from 'react';
import classNames from 'classnames';

import './MessageItem.css';

export const MessageItem = ({ message, owner }) => {
  const classes = classNames('chat__messages_dialogue', {
    'my_message': owner,
    'other_message': !owner
  });

  const showAvatar = <img src={message.avatar} alt={message.user} />

  return (
    <div className={classes}>
      <div className="message_content">
        {showAvatar}
        <div>
          <div className="message_text">
            {message.message}
          </div>
          <div className="message_time">{message.date}</div>
        </div>
      </div>
    </div>
  );
};
