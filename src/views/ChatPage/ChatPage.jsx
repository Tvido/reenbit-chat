import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import s from './ChatPage.module.css';

import { selectBySearch } from '../../redux/dialogues/dialogues';

import defaultAvatar from '../../assets/img/default.jpg';

import { Section } from '../../components/Section/Section';
import { DialoguesList } from '../../components/DialoguesList/DialoguesList';
import { MessageList } from '../../components/MessageList/MessageList';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MessageDialogueTitle } from '../../components/MessageDialogueTitle/MessageDialogueTitle';

export const ChatPage = () => {
  const [filter, setFilter] = useState("")

  const dialogues = useSelector(selectBySearch(filter))

  return (
    <Section>
      <div className={s.chat}>
        <div className={s.chat__dialogues}>
          <div className={s.chat__wrapper}>
            <div className={s.chat__dialogues_header}>
              <div className={s.chat__dialogues_owner}>
                <img src={defaultAvatar} alt="" />
              </div>
            </div>

            <SearchForm onInputSearch={setFilter} />
          </div>

          <DialoguesList
            isActiveDialogue={dialogues._id}
            selectedDialogueId={dialogues}
            dialogues={dialogues}
          />
        </div>

        <div className={s.chat__messages}>
          <MessageDialogueTitle />

          <div className={s.chat__messages_dialogue}>
            <MessageList />
          </div>

          <MessageForm />
        </div>
      </div>
    </Section>

  );
};
