import React from 'react'

import s from './MessageDialogueTitle.module.css';

export const MessageDialogueTitle = (props) => {
  return (
    <div className={s.chat__messages_header}>
      <div className={s.chat__messages_owner}>
        <img src={props.selectetTitleByDialogues.avatar} alt={props.selectetTitleByDialogues.title} />
        <div>
          <div className={s.chat__messages_owner_name}>{props.selectetTitleByDialogues.title}</div>

          <div className={s.chat__message_owners_status}>{props.selectetTitleByDialogues.status}</div>
        </div>
      </div>
    </div>
  )
}
