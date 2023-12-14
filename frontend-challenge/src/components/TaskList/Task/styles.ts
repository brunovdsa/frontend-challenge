import styled from 'styled-components';

export const TaskCard = styled.li`
  .complete {
    color: red;
  }
  .pending {
    color: blue;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px 0 0 4px;
  border: 1px solid ${(props) => props.theme.colors.medium_grey};
  padding-left: 1rem;
  height: 3rem;
`;

export const TaskP = styled.p`
  font-size: ${(props) => props.theme.font.font_size.body2};
  color: ${(props) => props.theme.colors.regular_grey};

  padding: 0.3rem 0;
`;

export const TaskButtonsWrapper = styled.div`
  display: flex;

  height: 100%;

  button:first-child {
    background-color: ${(props) => props.theme.colors.red};
  }

  button:last-child {
    background-color: ${(props) => props.theme.colors.green};
  }
`;
