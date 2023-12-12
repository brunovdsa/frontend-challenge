import styled from 'styled-components';

export const AddNewTaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

export const AddNewItemInput = styled.input`
  height: 3rem;
  font-size: ${(props) => props.theme.font.font_size.body2};
  border-radius: 4px 0 0 4px;
  border: 1px solid ${(props) => props.theme.colors.medium_grey};
  outline: 0;
  padding: 1rem;
  width: 100%;
`;

export const AddNewItemBtn = styled.button`
  height: 100%;
  width: 4rem;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  outline: none;
  border: 0;
  cursor: pointer;
  svg {
    height: 1.5rem;
  }
`;
