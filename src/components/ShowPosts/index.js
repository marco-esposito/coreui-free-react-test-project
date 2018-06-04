import React from 'react';
import _ from 'lodash';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';

import PostItem from './PostItem.js'


const ShowPosts = ({ posts, loading, error, history }) => {

  const onSelectPost = (id) => {
    history.push(`/editpost/${id}`);
  }

  if (loading) return (
    <tr><td colSpan={5}>Loading...</td></tr>
  )
  if (error !== false) return (
    <tr><td colSpan={5}>Something went wrong, please try again!</td></tr>
  )
  if (!isEmpty(posts)) {
    return (
      _.map(posts, post => (
        <PostItem
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
        />
      ))
    );
  } else {
    return (
      <tr><td colSpan={5}>Empty list</td></tr>
    )
  }
};

export default withRouter(ShowPosts);
