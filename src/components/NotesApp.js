import React from 'react';
import { getInitialData } from '../utils';
import NotesBody from './body/NotesBody';
import NotesHeader from './header/NotesHeader';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchedNotes: [],
      searchTitle: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.findNoteIndex = this.findNoteIndex.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  findNoteIndex(noteId) {
    for (const index in this.state.notes) {
      if (this.state.notes[index].id === noteId) {
        return index;
      }
    }

    return -1;
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const dateNow = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: dateNow,
            archived: false,
          },
        ],
      };
    });
  }

  onArchivedHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id === id).map((note) => (note.archived = !note.archived));
    this.setState({ updatedNotes });
  }

  onSearchChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
    this.onSearchEventHandler(event.target.value);
  }

  onSearchEventHandler(searchedTitle) {
    let searchedNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(searchedTitle.toLocaleLowerCase()));

    if (this.state.searchTitle.length >= 0) {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: searchedNotes });
    } else {
      this.setState({ searchedNotes: null });
      this.setState({ searchedNotes: this.state.notes });
    }
  }

  render() {
    return (
      <>
        <NotesHeader onSearchChange={this.onSearchChangeEventHandler} searchTitle={this.state.searchTitle} />
        <NotesBody notes={this.state.notes} searchedNotes={this.state.searchedNotes} searchedTitle={this.state.searchTitle} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} addNote={this.onAddNoteHandler} />
      </>
    );
  }
}

export default NotesApp;
