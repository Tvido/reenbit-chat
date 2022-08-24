import React from 'react'
import PropTypes from 'prop-types';

import { DialogueItem } from '../DialogueItem/DialogueItem'

export const DialoguesList = ({items = []}) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          <DialogueItem
            avatar={item.avatar}
            user={item.user}
            message={item.message}
            date={item.date}
          />
        </li>
      ))}
    </ul>
  )
}

DialoguesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};