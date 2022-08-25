import React from 'react'

import s from './SearchForm.module.css';

export const SearchForm = () => {
  return (
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
          Search or start new chat...
        </label>
      </div>
    </div>
  )
}
