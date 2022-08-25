import React from 'react'
import { DialogueItem } from '../DialogueItem/DialogueItem'

import s from './DialoguesList.module.css';

import dialogues from '../../assets/data/dialogues.json'

export const DialoguesList = () => {
  const selectedDialogueIndex = 0

  return (
    <ul className={s.dialogues_list}>
      {dialogues.map((dialogue, index) => (
        <li key={dialogue._id}>
          <DialogueItem
            {...dialogue}
            key={index}
            isActiveDialogue={ index === selectedDialogueIndex }
            />
        </li>
      ))}
    </ul>
  )
}