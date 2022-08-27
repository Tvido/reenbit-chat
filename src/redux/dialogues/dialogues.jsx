import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
import {format} from 'date-fns'


import ava_1 from '../../assets/img/ava_1.jpg';
import ava_2 from '../../assets/img/ava_2.png';
import ava_3 from '../../assets/img/ava_3.png';

const initialState = {
  dialogues: [
    {
      _id: "sdc6sd16vs1d",
      avatar: ava_1,
      user: "Chuck Norris",
      message: "We are still waitin` you...",
      date: "June 12, 2022",
      messages: [
        {
          _id: "be5h6",
          avatar: ava_1,
          user: null,
          date: "4/12/22, 4:00AM",
          message: "One Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        },
        {
          _id: "bh6b5e",
          user: null,
          date: "4/12/22, 4:05AM",
          message: "I`m havin` breakfast right now, can`t you wait for 10 min?",
          owner: true
        },
        {
          _id: "wv45vt54h",
          avatar: ava_1,
          user: null,
          date: "4/12/22, 4:10AM",
          message: "We are losing money! Quick!",
          owner: false
        },
        {
          _id: "wv45vbrt4h",
          avatar: ava_1,
          user: null,
          date: "4/12/22, 4:20AM",
          message: "We are still waitin` you...",
          owner: false
        },
      ]
    },
    {
      _id: "sdvbb",
      avatar: ava_2,
      user: "Alice Freeman",
      message: "I`m havin` breakfast right now, can`t you wait for 10 min?",
      date: "June 11, 2022",
      messages: [
        {
          _id: "be5h6",
          avatar: ava_2,
          user: null,
          date: "4/12/22, 4:00AM",
          message: "Two Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        }, {
          _id: "bh6b5e",
          user: null,
          date: "4/12/22, 4:05AM",
          message: "I`m havin` breakfast right now, can`t you wait for 10 min?",
          owner: true
        }
      ]
    },
    {
      _id: "sdhh776m8vbb",
      avatar: ava_3,
      user: "Josefina",
      message: "Three Quickly come to the meeting room 1B, we`ve a big server issue",
      date: "June 11, 2022",
      messages: [
        {
          _id: "be5h6",
          avatar: ava_3,
          user: null,
          date: "4/12/22, 4:00AM",
          message: "Three Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        }
      ]
    }
  ],
  activeId: null
}

export const dialoguesSlice = createSlice({
  name: 'dialogues',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const messages = state.dialogues.find(item => item._id === state.activeId)?.messages
      
      messages.push({
        _id: uuidv4(),
        avatar: null,
        user: null,
        date: format(new Date(),'MM/dd/yyyy, HH:mm '),
        ...action.payload
      })
    },

    setActiveId: (state, action) => {
      state.activeId = action.payload
    },
  },
})

export const selectActiveMessages = (state) => state.dialogues.dialogues.find(item => item._id === state.dialogues.activeId)?.messages

export const getActiveOponent = (state) => state?.dialogues.dialogues.find(item => item._id === state.dialogues.activeId)

export const selectFirstDialogue = (state) => state.dialogues.dialogues[0]

export const selectDialogues = (state) => state.dialogues.dialogues

export const selectActiveId = (state) => state.dialogues.activeId

export const { setActiveId, addMessage } = dialoguesSlice.actions

export const selectDialogueById = _id => {
  return function (state) {
    return state.dialogues.dialogues.find(item => item.id === _id)
  }
}

export default dialoguesSlice.reducer
