import React from 'react';

export default function PostForm() {
  return (
    <div>
      <h3>Create New Post</h3>
      <hr className="mb-4" />

      <form>
        <div className="form-group">
          <small className="text-secondary mb-2">Title</small>
          <input type="text" className="form-control rounded-0" />
        </div>

        <div className="form-group">
          <small className="text-secondary mb-2">Body</small>
          <textarea className="form-control rounded-0" rows="5" />
        </div>

        <button type="button" className="btn btn-dark btn-block rounded-0 mt-4 py-2">
          <div className="d-flex justify-content-between align-items-center">
            <span className="font-weight-bold">SUBMIT</span>
            <i className="material-icons">play_arrow</i>
          </div>
        </button>
      </form>
    </div>
  );
}
