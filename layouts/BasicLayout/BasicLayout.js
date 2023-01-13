import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from '../../components/Header';

const BasicLayout = (props) => {
  const { children } = props;

  return (
    <Container className='basic-layout'>
      <Header></Header>
      <Container className='content'>{children}</Container>
    </Container>
  );
};

export default BasicLayout;
