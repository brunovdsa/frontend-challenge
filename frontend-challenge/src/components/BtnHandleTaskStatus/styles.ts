import styled from 'styled-components';

export const ButtonTaskStatus = styled.button`
  height: 100%;
  width: 3rem;

  border: 0;
  outline: 0;

  cursor: pointer;

  svg {
    font-size: ${(props) => props.theme.font.font_size.headline6};
    color: ${(props) => props.theme.colors.white};
  }
`;
