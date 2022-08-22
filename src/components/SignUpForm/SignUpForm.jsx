import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { FcPlus } from 'react-icons/fc';

import s from './SignUpForm.module.css';

import ava from '../../assets/img/ava_1.jpg'

export const SignUpForm = () => {
  const [image, setImage] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

function validateImg(e) {
  const file = e.target.files[0]
  if(file.size > 1000000) {
    return alert("To big file")
  }
  setImage(file)
  setPreviewImage(URL.createObjectURL(file))
}

async function uploadImage() {
  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', 'rk1yl1tw')
  try {
    setUploadingImage(true)
    let result = await fetch("https://api.cloudinary.com/v1_1/tvido/image/upload", {
      method: 'post',
      body: data
    }) 
    const urlData = await result.json()
    setUploadingImage(false)
    return urlData.url
  } catch(error) {
    setUploadingImage(false)
    console.log('uploadImage error :>> ', error);
  }
}

async function register(e) {
    e.preventDefault()
    if (!image) return alert("Please, add your avatar")
    const url = await uploadImage(image)
    console.log('register url :>> ', url);
  }

  return (
    <>
      <form className={s.container} onSubmit={register}>
        <h1 className={s.title}>PLEASE Sign Up</h1>

        <div className={s.avatar}>
          <img className={s.signup} src={previewImage || ava } alt="" />
          <label htmlFor="uploadImg" className={s.uploadImg}><FcPlus /></label>
          <input type="file" hidden id="uploadImg" accept="image/png image/jpg image/jpeg" onChange={validateImg} />
        </div>

        <div className={s.inputs}>
          <div className={s.content}>
            <input
              id="formName"
              type="text"
              name="name"
              autoComplete="off"
              placeholder=" "
              className={s.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="formName" className={s.label}>
              * Name
            </label>
          </div>

          <div className={s.content}>
            <input
              id="formEmail"
              type="email"
              name="email"
              autoComplete="off"
              placeholder=" "
              className={s.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="formPass" className={s.label}>
              * Password
            </label>
          </div>
        </div>

        <div className="">
          <button type="submit" id="button" className="">
            { uploadingImage ? "Await..." : "Sign Up" }
            <FiSend />
          </button>
        </div>
      </form>
    </>
  );
};
