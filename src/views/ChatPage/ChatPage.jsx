import React from 'react';
import { useSelector } from 'react-redux'

import s from './ChatPage.module.css';

import { selectDialogues } from '../../redux/dialogues/dialogues';
import { selectetTitleByDialogues } from '../../assets/data/selectetTitleByDialogues.js'

import { Section } from '../../components/Section/Section';
import { DialoguesList } from '../../components/DialoguesList/DialoguesList';
import { MessageList } from '../../components/MessageList/MessageList';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MessageDialogueTitle } from '../../components/MessageDialogueTitle/MessageDialogueTitle';

export const ChatPage = () => {
  const dialogues = useSelector(selectDialogues)

  return (
    <Section>
      <div className={s.chat}>
        <div className={s.chat__dialogues}>
          <div className={s.chat__wrapper}>
            <div className={s.chat__dialogues_header}>
              <div className={s.chat__dialogues_owner}>
                <img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" alt="" />
              </div>

              <span>Owner</span>
            </div>

            <SearchForm />
          </div>

          <DialoguesList
            isActiveDialogue={dialogues._id}
            selectedDialogueId={dialogues}
            dialogues={dialogues}
          />
        </div>

        <div className={s.chat__messages}>
          <MessageDialogueTitle selectetTitleByDialogues={selectetTitleByDialogues} />

          <div className={s.chat__messages_dialogue}>
            <MessageList />
          </div>

          <MessageForm />
        </div>
      </div>
    </Section>

  );
};
