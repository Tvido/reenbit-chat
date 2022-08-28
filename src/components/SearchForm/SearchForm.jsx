import React from 'react';

import s from './SearchForm.module.css';

export const SearchForm = ({ onInputSearch }) => {

  const handleChange = (e) => {
    e.preventDefault()
    onInputSearch(e.target.value)
  }

  return (
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
            onInput={handleChange}
          />

          <label htmlFor="chat" className={s.label}>
            Search or start new chat...
          </label>
        </div>
      </div>
    </div>
  )
}