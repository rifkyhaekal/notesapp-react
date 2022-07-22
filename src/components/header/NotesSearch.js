import React from 'react';

function NotesSearch({ searchTitle, onSearchChange }) {
  return (
    <div className='note-search'>
      <input type='text' placeholder='Cari catatan...' value={searchTitle} onChange={(event) => onSearchChange(event)} />
    </div>
  );
}

export default NotesSearch;
