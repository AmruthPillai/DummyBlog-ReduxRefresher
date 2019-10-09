import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewPost as actionCreateNewPost } from '../actions/postActions';

export class PostForm extends Component {
  constructor() {
    super();
    this.state = { title: '', body: '' };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const { title, body } = this.state;
    const { createNewPost } = this.props;

    const postData = { title, body };
    createNewPost(postData);
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h3>Create New Post</h3>
        <hr className="mb-4" />

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <small className="text-secondary mb-2">Title</small>
            <input type="text" className="form-control rounded-0" name="title" value={title} onChange={this.onChange} />
          </div>

          <div className="form-group">
            <small className="text-secondary mb-2">Body</small>
            <textarea className="form-control rounded-0" rows="5" name="body" value={body} onChange={this.onChange} />
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
}

PostForm.propTypes = {
  createNewPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  createNewPost: actionCreateNewPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
