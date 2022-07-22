import React from 'react';

function NotesItemArchieveButton({ onArchive, isArchived, id }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      {isArchived ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}

export default NotesItemArchieveButton;
