import React from 'react'
import PropTypes from 'prop-types';

import './DialogueItem.css';

import defaultAvatar from '../../assets/img/chuck_norris.jpg';

export const DialogueItem = ({
  avatar = defaultAvatar,
  user,
  message,
  date,
  isActiveDialogue
}) => {
  let classes = "dialogues__item"

  if (isActiveDialogue) {
    classes += " active"
  }

  return (
    <div className={classes}>
      <img src={avatar || defaultAvatar} alt={user} />
      <div className="dialogues__item_info">{user}</div>
      <div className="dialogues__item_date">{date}</div>
      <div className="dialogues__item_message">
        {message}
      </div>
    </div>
  )
}

DialogueItem.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
};