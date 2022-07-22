import React from 'react';
import NotesItemTitle from './NotesItemTitle';
import NotesItemBody from './NotesItemBody';
import NotesItemDate from './NotesItemDate';

function NotesItemContent({ title, createdAt, body }) {
  return (
    <div className='note-item__content'>
      <NotesItemTitle title={title} />
      <NotesItemDate createdAt={createdAt} />
      <NotesItemBody body={body} />
    </div>
  );
}

export default NotesItemContent;
