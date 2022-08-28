import React from 'react'
import classNames from 'classnames';
import { format } from 'date-fns'

import './DialogueItem.css';

import defaultAvatar from '../../assets/img/default.jpg';

export const DialogueItem = ({
  dialogue,
  isActiveDialogue,
  onSelectDialogue
}) => {

  const classes = classNames('dialogues__item', {
    'active': isActiveDialogue
  });

  return (
    <div className={classes} onClick={() => {
      onSelectDialogue(dialogue)
    }}>
      <img src={dialogue.avatar || defaultAvatar} alt={dialogue.user} />
      <div className="dialogues__item_info">{dialogue.user}</div>
      <div className="dialogues__item_date">{format(new Date(dialogue.date), 'MM/dd/yy, HH:mm ')}</div>
      <div className="dialogues__item_message">
        {dialogue.recentMessage}
      </div>
    </div>
  )
}
