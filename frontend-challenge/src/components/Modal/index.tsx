import { Headline2, Headline5 } from '../Typography';
import { ProgressBar } from '../ProgressBar';
import { SearchBar } from '../SearchBar';
import { ManageTaskStatusBtn } from '../ManageTaskStatusBtn';
import {
  ContainerModal,
  DateInfo,
  HeaderModal,
  ManageTaskBtnContainer,
  BodyModal,
  DateInfoCol1,
  DateInfoCol2,
} from './styles';
import { NewTaskInput } from '../NewTaskInput';
import { TaskList } from '../TaskList';

export function Modal() {
  return (
    <ContainerModal>
      <HeaderModal>
        <DateInfoCol1>
          <DateInfo>
            <Headline2>07</Headline2>
            <div>
              <Headline5>Jul</Headline5>
              <Headline5>2023</Headline5>
            </div>
          </DateInfo>
          <Headline5>Wednesday</Headline5>
        </DateInfoCol1>

        <DateInfoCol2>
          <ProgressBar />
          <SearchBar />
          <ManageTaskBtnContainer>
            <ManageTaskStatusBtn>Done</ManageTaskStatusBtn>
            <ManageTaskStatusBtn>Pending</ManageTaskStatusBtn>
          </ManageTaskBtnContainer>
        </DateInfoCol2>
      </HeaderModal>
      <BodyModal>
        <NewTaskInput />
        <TaskList>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
          <li>Task 1</li>
        </TaskList>
      </BodyModal>
    </ContainerModal>
  );
}
