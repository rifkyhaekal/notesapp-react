import React from 'react';
import NotesInput from './input/NotesInput';
import NotesList from './NotesList';
import EmptyMessage from './EmptyMessage';

function NotesBody({ notes, searchedNotes, onDelete, addNote, onArchive, searchedTitle }) {
  let activeNotes = null;
  let archivedNotes = null;

  if (searchedTitle.length > 0) {
    activeNotes = searchedNotes.filter((note) => note.archived === false);
    archivedNotes = searchedNotes.filter((note) => note.archived === true);
  } else {
    activeNotes = notes.filter((note) => note.archived === false);
    archivedNotes = notes.filter((note) => note.archived === true);
  }

  return (
    <div className='note-app__body'>
      <NotesInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} /> : <EmptyMessage />}
      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} /> : <EmptyMessage />}
    </div>
  );
}

export default NotesBody;
