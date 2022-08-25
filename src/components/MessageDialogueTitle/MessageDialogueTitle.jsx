import React from 'react'

import s from './MessageDialogueTitle.module.css';

export const MessageDialogueTitle = () => {
  return (

    <div className={s.chat__messages_header}>
      <div className={s.chat__messages_owner}>
        <img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" alt="" />
        <div>
          <div className={s.chat__messages_owner_name}>Name</div>

          <div className={s.chat__message_owners_status}>Online</div>
        </div>
      </div>
    </div>
  )
}
