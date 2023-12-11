import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
  color: ${(props) => props.theme.colors.regular_grey};
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
`;
