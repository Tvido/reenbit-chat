import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns'

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
          <div className="message_time">{format(new Date(message.date), 'MM/dd/yy, HH:mm ')}</div>
        </div>
      </div>
    </div>
  );
};
