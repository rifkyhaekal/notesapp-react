import React from 'react';
import NotesCharLimit from './NotesCharLimit';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value.slice(0, this.state.maxLength),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <NotesCharLimit sisaKarakter={this.state.maxLength - this.state.title.length} />
          <input type='text' className='note-input__title' placeholder='Ini adalah judul...' value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
          <textarea type='text' className='note-input__body' placeholder='Tuliskan catatanmu di sini...' value={this.state.body} onChange={this.onBodyChangeEventHandler} required />
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
