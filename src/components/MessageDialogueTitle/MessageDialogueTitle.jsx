import React from 'react'
import { useSelector } from 'react-redux'

import {  getActiveOponent } from '../../redux/dialogues/dialogues';

import s from './MessageDialogueTitle.module.css';

import defaultAvatar from '../../assets/img/default.jpg';

export const MessageDialogueTitle = () => {
  const dialogueUserData = useSelector(getActiveOponent);

  return (
    <div className={s.chat__messages_header}>
      <div className={s.chat__messages_owner}>
        <img src={dialogueUserData?.avatar || defaultAvatar} alt={dialogueUserData?.user} />
        <div>
          <div className={s.chat__messages_owner_name}>{dialogueUserData?.user}</div>
        </div>
      </div>
    </div>


  )
}
