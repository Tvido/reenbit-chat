import React from 'react';
import { FiSend } from 'react-icons/fi';

import s from './SignUpForm.module.css';

export const SignUpForm = () => {

  return (
    <>
      <form action="" className={s.container}>
        <h1 className={s.title}>PLEASE Sign Up</h1>
        <div className={s.inputs}>
          <div className={s.content}>
            <input
              id="formEmail"
              type="email"
              name="email"
              autoComplete="off"
              placeholder=" "
              className={s.input}
            />
            <label htmlFor="formEmail" className={s.label}>
              * gmail@gmail.com
            </label>
          </div>

          <div className={s.content}>
            <input
              id="formPass"
              type="password"
              name="password"
              autoComplete="off"
              placeholder=" "
              className={s.input}
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
    </>
  );
};
