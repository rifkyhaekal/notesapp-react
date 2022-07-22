import React from 'react';
import NotesItemArchieveButton from './NotesItemArchieveButton';
import NotesItemDeleteButton from './NotesItemDeleteButton';

function NotesItemAction({ onDelete, onArchive, id, isArchived }) {
  return (
    <div className='note-item__action'>
      <NotesItemDeleteButton onDelete={onDelete} id={id} />
      <NotesItemArchieveButton onArchive={onArchive} id={id} isArchived={isArchived} />
    </div>
  );
}

export default NotesItemAction;
