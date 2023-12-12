import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.medium_grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const SearchInput = styled.input`
  height: 3rem;
  font-size: ${(props) => props.theme.font.font_size.body2};
  border: 0;
  outline: 0;
  padding: 1rem 0;
`;

export const SearchBtn = styled.button`
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.regular_grey};
    height: 1rem;
  }
`;
