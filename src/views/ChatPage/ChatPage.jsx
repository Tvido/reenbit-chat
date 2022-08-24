import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import s from './ChatPage.module.css';

import { Section } from '../../components/Section/Section';
import { Message } from '../../components/Message/Message';
import { DialoguesList } from '../../components/DialoguesList/DialoguesList';

import dialogues from '../../assets/data/dialogues.json';

export const ChatPage = () => {
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
              <div className={s.inputs}>
                <div className={s.content}>
                  <input
                    required
                    id="chat"
                    type="chat"
                    name="chat"
                    autoComplete="off"
                    placeholder=" "
                    className={s.input}
                    onChange={() => { }}
                  />

                  <label htmlFor="chat" className={s.label}>
                    Search or start new chat <AiOutlineSearch />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className={s.chat__dialogues_list}>
            <DialoguesList items={dialogues} />
          </div>
        </div>

        <div className={s.chat__messages}>
          <div className={s.chat__messages_header}>
            <div className={s.chat__messages_owner}>
              <img src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" alt="" />
              <div>
                <div className={s.chat__messages_owner_name}>Name</div>

                <div className={s.chat__message_owners_status}>Online</div>
              </div>
            </div>
          </div>

          <div className={s.chat__messages_dialogue}>
            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />

            <Message
              avatar="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              text="My text "
              date="less than a minute"
              isMe={true}
            />
          </div>

          <div className={s.chat__messages_input}>
            <div className={s.inputs}>
              <div className={s.content}>
                <input
                  required
                  id="chat"
                  type="chat"
                  name="chat"
                  autoComplete="off"
                  placeholder=" "
                  className={s.input}
                  onChange={() => { }}
                />

                <label htmlFor="chat" className={s.label}>
                  Type your message <BiSend />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

  );
};
