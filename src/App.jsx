import React from 'react';
import { Provider } from 'react-redux';

import Store from './Store';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Header from './components/Header';

export default function App() {
  return (
    <Provider store={Store}>
      <div className="container mt-5">
        <Header />

        <div className="row">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <PostForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}
