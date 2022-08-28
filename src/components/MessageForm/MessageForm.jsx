import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import s from './MessageForm.module.css';

import { addMessage, getActiveOponent } from '../../redux/dialogues/dialogues';

export const MessageForm = () => {
  const dispatch = useDispatch()
  const dialogueUserData = useSelector(getActiveOponent);
  const [inputValue, setInputValue] = useState("")

  const getResult = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random")
    addAnswerMessage(res.data.value)
  }

  const addNewMessage = () => {
    dispatch(addMessage({
      message: inputValue,
      owner: true
    }))
  }

  const addAnswerMessage = (message) => {
    dispatch(addMessage({
      avatar: dialogueUserData?.avatar,
      message,
      owner: false
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    addNewMessage()

    setTimeout(() => {
      getResult()
    }, 10000);

    reset()
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  const reset = () => {
    setInputValue("")
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
              value={inputValue}
              autoComplete="off"
              placeholder=" "
              className={s.input}
              onChange={handleChange}
            />

            <label htmlFor="send" className={s.label}>
              Type your message
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

