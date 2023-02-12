import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.header`
  background-color: var(--light-gray);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const buttonColors = {
  red: css`
    background-color: var(--red);
  `,
  grey: css`
    background-color: var(--grey);
  `,
  green: css`
    background-color: var(--green);
  `,
};

const Button = styled.button<{ color: 'red' | 'green' | 'grey' }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  ${({ color }) => buttonColors[color]}
`;

const Title = styled.h1`
  font-size: 1.2rem;
  flex: 1 1 0;
  text-align: center;
`;

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title }) => (
  <Container>
    <ButtonGroup>
      <Button color="red" />
      <Button color="grey" />
      <Button color="green" />
    </ButtonGroup>

    <Title>{title}</Title>
  </Container>
);

export default Header;
