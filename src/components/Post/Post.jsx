import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from '../../state/Provider';
import { deletePost } from '../../actions/Actions';


export default function Post({ title, body }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(body));
  };

  return (
    <>
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Body</dt>
        <dd>{body}</dd>
      </dl>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};



