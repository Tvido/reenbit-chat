import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

import ava_1 from '../../assets/img/ava_1.jpg';
import ava_2 from '../../assets/img/ava_2.png';
import ava_3 from '../../assets/img/ava_3.png';

const initialState = {
  dialogues: [
    {
      _id: "sdc6sd16vs1d",
      avatar: ava_1,
      user: "Chuck Norris",
      recentMessage: "We are still waitin` you...",
      date: new Date("June 11, 2022"),
      messages: [
        {
          _id: "be5h6",
          avatar: ava_1,
          user: null,
          date: new Date("June 11, 2022"),
          message: "One Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        },
        {
          _id: "bh6b5e",
          user: null,
          date: new Date("June 11, 2022"),
          message: "I`m havin` breakfast right now, can`t you wait for 10 min?",
          owner: true
        },
        {
          _id: "wv45vt54h",
          avatar: ava_1,
          user: null,
          date: new Date("June 11, 2022"),
          message: "We are losing money! Quick!",
          owner: false
        },
        {
          _id: "wv45vbrt4h",
          avatar: ava_1,
          user: null,
          date: new Date("June 11, 2022"),
          message: "We are still waitin` you...",
          owner: false
        },
      ]
    },
    {
      _id: "sdvbb",
      avatar: ava_2,
      user: "Alice Freeman",
      recentMessage: "I`m havin` breakfast right now, can`t you wait for 10 min?",
      date: new Date("June 10, 2022"),
      messages: [
        {
          _id: "be5h6",
          avatar: ava_2,
          user: null,
          date: new Date("June 09, 2022"),
          message: "Two Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        }, {
          _id: "bh6b5e",
          user: null,
          date: new Date("June 10, 2022"),
          message: "I`m havin` breakfast right now, can`t you wait for 10 min?",
          owner: true
        }
      ]
    },
    {
      _id: "sdhh776m8vbb",
      avatar: ava_3,
      user: "Josefina",
      recentMessage: "Three Quickly come to the meeting room 1B, we`ve a big server issue",
      date: new Date("June 11, 2022"),
      messages: [
        {
          _id: "be5h6",
          avatar: ava_3,
          user: null,
          date: new Date("June 11, 2022"),
          message: "Three Quickly come to the meeting room 1B, we`ve a big server issue",
          owner: false
        }
      ]
    }
  ],
  activeId: null,
  search: ""
}

export const dialoguesSlice = createSlice({
  name: 'dialogues',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const dialogue = state.dialogues.find(item => item._id === state.activeId)

      dialogue.messages.push({
        _id: uuidv4(),
        avatar: null,
        user: null,
        date: new Date(),
        ...action.payload
      })
      dialogue.recentMessage = action.payload.message
      dialogue.date = new Date()
    },

    setActiveId: (state, action) => {
      state.activeId = action.payload
    },

    filterDialogues: (state, action) => {
      state.search = action.payload?.toLowerCase()
    }
  }
})

export const selectBySearch = (search = "") => (state) => {
  const normalizedSearchString = search.trim().toLowerCase()
  let dialogues = state.dialogues.dialogues

  if (normalizedSearchString) {
    dialogues = state.dialogues.dialogues.filter(item => {
      const found = item.user?.toLowerCase().includes(normalizedSearchString)

      if (found) {
        return true
      }

      return item.messages.some((message) => message.message.toLowerCase().includes(normalizedSearchString))
    })
  }

  if (dialogues.length) {
    return [...dialogues]?.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    )
  }

  return dialogues
}

export const selectActiveMessages = (state) => state.dialogues.dialogues.find(item => item._id === state.dialogues.activeId)?.messages

export const getActiveOponent = (state) => state?.dialogues.dialogues.find(item => item._id === state.dialogues.activeId)

export const selectFirstDialogue = (state) => state.dialogues.dialogues[0]

export const selectDialogues = (state) => state.dialogues.dialogues

export const selectActiveId = (state) => state.dialogues.activeId

export const { setActiveId, addMessage, filterDialogues } = dialoguesSlice.actions

export const selectDialogueById = _id => {
  return function (state) {
    return state.dialogues.dialogues.find(item => item.id === _id)
  }
}

export default dialoguesSlice.reducer
