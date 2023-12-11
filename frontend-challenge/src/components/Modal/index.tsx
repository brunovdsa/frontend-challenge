import {
  ContainerModal,
  DateInfo,
  HeaderModal,
  TaskBntStatusContainer,
  BodyModal,
} from './styles';

export function Modal() {
  return (
    <ContainerModal>
      <HeaderModal>
        <DateInfo>
          <h1>07</h1>
          <div>
            <p>Jul</p>
            <p>2023</p>
          </div>
        </DateInfo>
        <p>Wednesday</p>
      </HeaderModal>
      <BodyModal>
        <progress value={undefined} />
        <input type='text' />
        <TaskBntStatusContainer>
          <button>A</button>
          <button>B</button>
        </TaskBntStatusContainer>
        <ul>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
        </ul>
      </BodyModal>
    </ContainerModal>
  );
}
