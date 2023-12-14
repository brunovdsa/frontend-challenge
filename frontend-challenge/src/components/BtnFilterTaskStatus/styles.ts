import styled from 'styled-components';

export const ManageTaskBtn = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.medium_grey};
  border-radius: 17px;
  cursor: pointer;

  &:active {
    color: red;
  }
`;
