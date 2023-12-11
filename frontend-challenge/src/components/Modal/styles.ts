import styled from 'styled-components';

export const ContainerModal = styled.div`
  background-color: ${(props) => props.theme.colors.light_grey};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 21rem;
  height: 100%;
  padding: 1rem;

  margin: 0;
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DateInfo = styled.div`
  display: flex;
`;

export const TaskBntStatusContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BodyModal = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 1rem;
`;
