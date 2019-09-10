import React, { Component, Fragment } from 'react';
import './App.css';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import Filter from './Filter';

const makeNotes = () => {
  const notes = [];
  for (let i = 1; i <= 10; ++i) {
    const newNote = {
      id: i,
      title: `note ${i}`,
      body: `this is a body for note number ${i}`,
    };
    notes.push(newNote);
  }
  return notes;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allNotes: makeNotes(),
      viewing: 'list',
      filter: '',
    };
  }

  addFilter = input => {
    this.setState({ filter: input });
  };
  
  filterNotes = () => {
    const notes = this.state.allNotes.filter(note => note.title.includes(this.state.filter))
    return notes
  }

  addNewNote = newNote => {
    this.setState();
    const id = this.state.allNotes.length + 1;
    this.setState(prevState => {
      return {
        allNotes: [...prevState.allNotes, newNote],
        viewing: 'list',
      };
    });
  };

  toggleView = () => {
    if (this.state.viewing === 'form') {
      this.setState({ viewing: 'list' });
    } else {
      this.setState({ viewing: 'form' });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          evernote guided project
          <span>
            <button type="button" onClick={this.toggleView}>
              view {this.state.viewing === 'form' ? 'list' : 'form'}
            </button>
          </span>
        </h1>
        {this.state.viewing === 'list' && <Filter addFilter={this.addFilter} />}

        {this.state.viewing === 'list' ? (
          <NoteList allNotes={this.filterNotes()} />
        ) : (
          <NoteForm addNewNote={this.addNewNote} />
        )}
      </div>
    );
  }
}

export default App;

// * props vs state
