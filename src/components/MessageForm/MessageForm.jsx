import React from 'react';
// import { BiSend } from 'react-icons/bi'

import s from './MessageForm.module.css';

export const MessageForm = () => {

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className={s.chat__messages_input}>

      <div className={s.inputs}>
        <form onSubmit={handleSubmit}>
          <div className={s.content}>
            <input
              required
              id="send"
              type="send"
              name="send"
              autoComplete="off"
              placeholder=" "
              className={s.input}
              onChange={() => { }}
            />

            <label htmlFor="send" className={s.label}>
              Type your message
              {/* <button type='submit'>
              <BiSend />
            </button> */}
            </label>
          </div>
        </form>

      </div>
    </div>
  );
};

