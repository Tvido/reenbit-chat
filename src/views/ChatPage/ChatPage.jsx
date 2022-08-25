import React from 'react';
import s from './ChatPage.module.css';

import { Section } from '../../components/Section/Section';
import { DialoguesList } from '../../components/DialoguesList/DialoguesList';

import dialogues from '../../assets/data/dialogues.json';
import messages from '../../assets/data/messages.json'
import {selectetTitleByDialogues} from '../../assets/data/selectetTitleByDialogues.js'

import { MessageForm } from '../../components/MessageForm/MessageForm';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MessageList } from '../../components/MessageList/MessageList';
import { MessageDialogueTitle } from '../../components/MessageDialogueTitle/MessageDialogueTitle';

export const ChatPage = (props) => {
  // const selectetTitleByDialogues = {title: "Chuck Norris"}

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

            <div className={s.chat__search}>
              <SearchForm />
            </div>
          </div>

          <div className={s.chat__dialogues_list}>
            <DialoguesList items={dialogues} />
          </div>
        </div>

        <div className={s.chat__messages}>
          <MessageDialogueTitle selectetTitleByDialogues={selectetTitleByDialogues} />

          <div className={s.chat__messages_dialogue}>
            <MessageList items={messages} />
          </div>

          <div className={s.chat__messages_input}>
            <MessageForm />
          </div>
        </div>
      </div>
    </Section>

  );
};
