import React from 'react';
import NotesSearch from './NotesSearch';

function NotesHeader({ onSearchChange, searchTitle }) {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NotesSearch searchTitle={searchTitle} onSearchChange={onSearchChange} />
    </div>
  );
}

export default NotesHeader;
