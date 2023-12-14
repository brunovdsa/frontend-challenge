import styled from 'styled-components';

export const Progress = styled.progress`
  width: 100%;
  height: 1.5rem;
  border-radius: 0;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  margin: 1rem 0 0.5rem;
`;

// export const BackgroundComplete = styled.div<{ progress: number }>`
//   width: ${(props) => props.progress};
//   height: 24px;
//   border-radius: 4px;
//   background-color: ${(props) => props.theme.colors.green};
// `;
