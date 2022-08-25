import React from 'react';

import './MessageList.css';
import { MessageItem } from '../MessageItem/MessageItem';

import messages from '../../assets/data/messages.json'

export const MessageList = () => {
  return (
    <ul id="message_list">
      {messages.map((message, index) => (
        <li key={message._id}>
          <MessageItem
            {...message}
            key={index}
            owner={message.owner}
          />
        </li>
      ))}
    </ul>
  );
};
