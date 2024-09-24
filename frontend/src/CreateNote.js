// src/CreateNote.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createNote = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/notes', {
        title,
        content,
        userId: 'userObjectId' // Replace with a valid ObjectId
      });
      console.log('Note created:', response.data);
      // You can reset the form or handle the success message here
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={createNote}>Create Note</button>
    </div>
  );
};

export default CreateNote;
