import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../styles/Posts.css';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

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
