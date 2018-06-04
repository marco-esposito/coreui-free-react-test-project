import React from 'react';

const PostItem = ({ post, onSelectPost }) => {
  return (
    <tr>
      <td className='text-center'>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.categories}</td>
      <td>{post.content}</td>
      <td>
        <i className="cui-pencil" onClick={() => onSelectPost(post.id)}></i>
      </td>
    </tr>
  );
};

export default PostItem;
