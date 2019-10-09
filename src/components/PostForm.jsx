import axios from 'axios';
import React, { useState } from 'react';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const post = { title, body };
    const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    console.log(resp);
  };

  return (
    <div>
      <h3>Create New Post</h3>
      <hr className="mb-4" />

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <small className="text-secondary mb-2">Title</small>
          <input type="text" className="form-control rounded-0" name="title" value={title} onChange={(v) => setTitle(v.target.value)} />
        </div>

        <div className="form-group">
          <small className="text-secondary mb-2">Body</small>
          <textarea className="form-control rounded-0" rows="5" name="body" value={body} onChange={(v) => setBody(v.target.value)} />
        </div>

        <button type="submit" className="btn btn-dark btn-block rounded-0 mt-4 py-2">
          <div className="d-flex justify-content-between align-items-center">
            <span className="font-weight-bold">SUBMIT</span>
            <i className="material-icons">play_arrow</i>
          </div>
        </button>
      </form>
    </div>
  );
}
