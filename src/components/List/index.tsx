import React from 'react';

import { Container, Item } from './styles';

interface LisProps {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<LisProps> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <h1>{title}</h1>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
