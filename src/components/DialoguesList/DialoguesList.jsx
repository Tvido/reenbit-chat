import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFirstDialogue, selectActiveId, setActiveId } from '../../redux/dialogues/dialogues';
import { DialogueItem } from '../DialogueItem/DialogueItem';
import s from './DialoguesList.module.css';

export const DialoguesList = ({ dialogues }) => {
  const dispatch = useDispatch()
  const activeId = useSelector(selectActiveId);

  const firstDialogue = useSelector(selectFirstDialogue)

  useEffect(() => {
    dispatch(setActiveId(firstDialogue._id))
  }, [])


  const onHandleDialogue = (dialogue) => {
    dispatch(setActiveId(dialogue._id))
  }

  const dialogueItems = dialogues.map((dialogue) => {
    return <DialogueItem
      key={dialogue._id}
      onSelectDialogue={onHandleDialogue}
      isActiveDialogue={dialogue._id === activeId}
      dialogue={dialogue} />;
  });

  return (
    <div className={s.dialogues_list}>
      {dialogueItems}
    </div>
  );

}