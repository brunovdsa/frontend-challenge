import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  padding: 5rem 0;
  margin: 0;
  scroll-behavior: smooth;
  color: ${(props) => props.theme.colors.regular_grey};
`;
