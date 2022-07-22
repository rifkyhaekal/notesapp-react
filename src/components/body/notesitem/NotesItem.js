import React from 'react';
import NotesItemContent from './NotesItemContent';
import NotesItemAction from './NotesItemAction.js';

function NotesItem({ id, title, createdAt, body, onDelete, onArchive, isArchived }) {
  return (
    <div className='note-item'>
      <NotesItemContent title={title} createdAt={createdAt} body={body} />
      <NotesItemAction onDelete={onDelete} onArchive={onArchive} id={id} isArchived={isArchived} />
    </div>
  );
}

export default NotesItem;
