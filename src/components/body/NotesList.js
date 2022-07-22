import React from 'react';
import NotesItem from './notesitem/NotesItem';

function NotesList({ notes, onDelete, onArchive }) {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
      ))}
    </div>
  );
}

export default NotesList;
