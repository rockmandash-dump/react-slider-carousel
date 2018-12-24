import React from 'react';
import styled from '@emotion/styled';

const Container = styled.img`
  display: block;
  width: 100%;
`;

const Post = () => {
  return <Container src="https://source.unsplash.com/user/erondu/500x500" />;
};

export default Post;
