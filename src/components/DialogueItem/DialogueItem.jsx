import React from 'react'
import classNames from 'classnames';
import './DialogueItem.css';

import defaultAvatar from '../../assets/img/chuck_norris.jpg';

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
      <div className="dialogues__item_date">{dialogue.date}</div>
      <div className="dialogues__item_message">
        {dialogue.message}
      </div>
    </div>
  )
}
