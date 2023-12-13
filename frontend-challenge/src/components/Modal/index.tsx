import { Headline2, Headline5 } from '../Typography';
import { ProgressBar } from '../ProgressBar';
import { SearchBar } from '../SearchBar';
import { ManageTaskStatusBtn } from '../ManageTaskStatusBtn';
import { v4 as uuidv4 } from 'uuid';
import {
  ContainerModal,
  DateInfo,
  HeaderModal,
  ManageTaskBtnContainer,
  BodyModal,
  DateInfoCol1,
  DateInfoCol2,
} from './styles';

import { Form } from '../Form';
import { useState } from 'react';
import { TaskList } from '../TaskList';
import { Task } from '../TaskList/Task';

export interface todoProps {
  id: string;
  task: todoProps;
  completed: boolean;
  isEditing: boolean;
}

export function Modal() {
  const [todos, setTodos] = useState<Array<todoProps>>([]);

  const addTodo = (todo: todoProps) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

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
        <Form addTodo={addTodo} />
        <TaskList>
          {todos &&
            todos.map((todo: todoProps) => {
              return <Task>{todo.task}</Task>;
            })}
        </TaskList>
      </BodyModal>
    </ContainerModal>
  );
}
