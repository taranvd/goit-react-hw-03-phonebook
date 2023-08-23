import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  &:active {
    color: white;
    background-color: blue;
  }
`;
