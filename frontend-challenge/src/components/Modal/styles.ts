import styled from 'styled-components';

export const ContainerModal = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 21rem;
  height: 100%;
  padding: 3rem 1rem;

  margin: 0;
`;

export const HeaderModal = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  h5:last-child {
    font-weight: ${(props) => props.theme.font.font_weight.regular};
  }
`;

export const DateInfoCol1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateInfoCol2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const DateInfo = styled.div`
  display: flex;
  align-items: center;

  h5:first-child {
    font-weight: ${(props) => props.theme.font.font_weight.regular};
    margin-bottom: -0.35rem;
  }
  h5:last-child {
    font-weight: ${(props) => props.theme.font.font_weight.light};
  }
`;

export const ManageTaskBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BodyModal = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
