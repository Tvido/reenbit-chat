import React from 'react'
import { useSelector } from 'react-redux'

import {  selectActiveMessages } from '../../redux/dialogues/dialogues';

import s from './MessageDialogueTitle.module.css';

export const MessageDialogueTitle = (props) => {
  const messages = useSelector(selectActiveMessages);

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
