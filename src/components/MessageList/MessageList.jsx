import React from 'react';
import { useSelector } from 'react-redux'
import './MessageList.css';
import { MessageItem } from '../MessageItem/MessageItem';
import { selectActiveMessages } from '../../redux/dialogues/dialogues';

export const MessageList = () => {
  const messages = useSelector(selectActiveMessages);

  const messageItems = messages?.map((message) => {
    return <MessageItem
      key={message._id}
      owner={message.owner}
      message={message} />;
  });

  return (
    <div className="message__list">
      <div className="message__output">
        {messageItems}
      </div>
    </div>
  );
};
