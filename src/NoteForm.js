import React from 'react';

class NoteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
    }
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.addNewNote(this.state)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          title:
          <input onChange={this.handleChange} type="text" name="title"></input>
          body:
          <input onChange={this.handleChange} type="textarea" name="body"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default NoteForm
