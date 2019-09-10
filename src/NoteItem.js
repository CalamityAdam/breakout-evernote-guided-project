import React from 'react';

const NoteItem = props => {
  return (
    <li>
      <h3>{props.note.title}</h3>
      <p>{props.note.body}</p>
    </li>
  )
}

export default NoteItem;
