import React from 'react';

function NotesItemDeleteButton({ onDelete, id }) {
  return (
    <button className='note-item__delete-button' onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default NotesItemDeleteButton;
