import React from 'react';

const PostItem = ({ post }) => {
  return (
    <tr>
      <td className='text-center'>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.categories}</td>
      <td>{post.content}</td>
    </tr>
  );
};

export default PostItem;
