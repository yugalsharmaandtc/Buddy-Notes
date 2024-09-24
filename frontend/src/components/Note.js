import React from 'react';

const Note = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Owner: {note.owner}</p>
    </div>
  );
};

export default Note;