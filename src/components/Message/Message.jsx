import React from 'react';
import PropTypes from 'prop-types';

import s from './Message.module.css';

export const Message = ({user, avatar, text, date, type = 'isme'}) => {
  return (
    <div className={s.message}>
      <div className={s.message__avatar}>
        <img src={avatar} alt={`Avatar ${user?.name}`} />
      </div>

      <div className={s.message__content}>
        <div className={s.message__bubble}>
          <p className={s.message__text}>{text}</p>
        </div>
        
        <span className={s.message__date}>{date}</span>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  user: PropTypes.object,
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.any
}