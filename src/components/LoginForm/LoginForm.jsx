import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi';

import s from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login(e) {
    e.preventDefault()
  }

  return (
    <form action="" className={s.container} onSubmit={login}>
      <h1 className={s.title}>PLEASE LOGIN</h1>
      <div className={s.inputs}>
        <div className={s.content}>
          <input
            required
            id="formEmail"
            type="email"
            name="email"
            autoComplete="off"
            placeholder=" "
            className={s.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="formEmail" className={s.label}>
            * gmail@gmail.com
          </label>
        </div>

        <div className={s.content}>
          <input
            required
            id="formPass"
            type="password"
            name="password"
            autoComplete="off"
            placeholder=" "
            className={s.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="formPass" className={s.label}>
            * Password
          </label>
        </div>
      </div>

      <div className="">
        <button type="submit" id="button" className="">
          НАДІСЛАТИ
          <FiSend />
        </button>
      </div>
    </form>
  );
};
