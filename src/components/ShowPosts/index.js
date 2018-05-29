import React from 'react';
import _ from 'lodash';
import isEmpty from 'lodash/isEmpty';

import PostItem from './PostItem.js'

const ShowPosts = ({ posts, loading, error }) => {
  if (loading) return (
    <tr><td colSpan={4}>Loading...</td></tr>
  )
  if (error !== false) return (
    <tr><td colSpan={4}>Something went wrong, please try again!</td></tr>
  )
  if (!isEmpty(posts)) {
    return (
      _.map(posts, post => (
        <PostItem
          key={post.id}
          post={post}
        />
      ))
    );
  } else {
    return (
      <tr><td colSpan={4}>Empty list</td></tr>
    )
  }
};

export default ShowPosts;
