import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const renderNotes = () => {
    return props.allNotes.map(note => (<NoteItem note={note} key={note.id} />))
  }
  
  return (
    <div>
      <ul>
        {renderNotes()}
      </ul>
    </div>
  )
}

export default NoteList;
