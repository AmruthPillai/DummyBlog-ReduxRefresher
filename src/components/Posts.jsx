import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts as actionFetchPosts } from '../actions/postActions';

import '../styles/Posts.css';

class Posts extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const postItems = posts.map((post) => (
      <div className="post" key={post.id}>
        <h5 className="text-capitalize">{post.title}</h5>
        <p className="text-justify">{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h3>Posts</h3>
        <hr className="mb-4" />

        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

const mapDispatchToProps = {
  fetchPosts: actionFetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
