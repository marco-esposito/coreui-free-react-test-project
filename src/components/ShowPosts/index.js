import React from 'react';
import _ from 'lodash';
import isEmpty from 'lodash/isEmpty';

import PostItem from './PostItem.js'

const ShowPosts = ({ posts, loading }) => {
  if (loading) return (
    <tr>
      <td colSpan={4}>Loading...</td>
    </tr>
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
      <tr>
        <td colSpan={4}>Empty list</td>
    </tr>
    )
  }
};

export default ShowPosts;
