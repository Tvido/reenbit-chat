import React from 'react'
import { useState } from 'react';
import { DialogueItem } from '../DialogueItem/DialogueItem'

import s from './DialoguesList.module.css';

import dialogues from '../../assets/data/dialogues.json'

export const DialoguesList = () => {
  const [dialogueId, setDialogueId] = useState(null)

const onHandleDialogue = (id) => {
  setDialogueId(id)
  console.log('index', id)
}


  return (
    <ul className={s.dialogues_list}>
      {dialogues.map((dialogue, index) => (
        <li key={dialogue._id}>
          <DialogueItem
            {...dialogue}
            key={index}
            onClick={onHandleDialogue}
            isActiveDialogue={ dialogue._id === dialogueId }
            />
        </li>
      ))}
    </ul>
  )
}