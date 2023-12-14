import { Headline2, Headline5 } from '../Typography';
import { ProgressBar } from '../ProgressBar';
import { SearchBar } from '../SearchBar';
import { BtnFilterTaskStatus } from '../BtnFilterTaskStatus';
import { v4 as uuidv4 } from 'uuid';
import * as Styled from './styles';

import { Form } from '../Form';
import { useState } from 'react';
import { TaskList } from '../TaskList';
import { Task } from '../TaskList/Task';

export interface todoProps {
  id: string;
  task: todoProps;
  completed: boolean;
}

export function Modal() {
  const [todos, setTodos] = useState<Array<todoProps>>([]);
  const [filteredTodos, setFilteredTodos] = useState<Array<todoProps>>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const addTodo = (todo: todoProps) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
      },
    ]);
  };

  const toggleCompleted = (id: string) => {
    setIsCompleted(true);
    setTodos(
      todos.map((todo: todoProps) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTaskDoneFilter = () => {
    if (isCompleted) {
      setFilteredTodos(
        todos.filter((todo: todoProps) => todo.completed === true)
      );
      setIsCompleted(!isCompleted);
    } else {
      setFilteredTodos(todos);
      setIsCompleted(!isCompleted);
    }
  };

  const handleTaskPendingFilter = () => {
    if (isCompleted) {
      setFilteredTodos(
        todos.filter((todo: todoProps) => todo.completed === false)
      );
      setIsCompleted(!isCompleted);
    } else {
      setFilteredTodos(todos);
      setIsCompleted(!isCompleted);
    }
  };

  const progressBarValue = () => {
    const todoCompleted = todos.filter((todo) => todo.completed === true);
    const result: number =
      todos.length === 0 ? 0 : (todoCompleted.length / todos.length) * 100;

    return result;
  };

  return (
    <Styled.ContainerModal>
      <Styled.HeaderModal>
        <Styled.DateInfoCol1>
          <Styled.DateInfo>
            <Headline2>07</Headline2>
            <div>
              <Headline5>Jul</Headline5>
              <Headline5>2023</Headline5>
            </div>
          </Styled.DateInfo>
          <Headline5>Wednesday</Headline5>
        </Styled.DateInfoCol1>

        <Styled.DateInfoCol2>
          <ProgressBar value={progressBarValue} />
          <SearchBar />
          <Styled.ManageTaskBtnContainer>
            <BtnFilterTaskStatus onClick={handleTaskDoneFilter}>
              Done
            </BtnFilterTaskStatus>
            <BtnFilterTaskStatus onClick={handleTaskPendingFilter}>
              Pending
            </BtnFilterTaskStatus>
          </Styled.ManageTaskBtnContainer>
        </Styled.DateInfoCol2>
      </Styled.HeaderModal>
      <Styled.BodyModal>
        <Form addTodo={addTodo} />
        <Styled.TaskListWrapper>
          <TaskList>
            {filteredTodos.length > 0
              ? filteredTodos.map((todo: todoProps, index: any) => {
                  return (
                    <Task
                      task={todo.task}
                      key={todo.id}
                      toggleCompleted={() => toggleCompleted(todo.id)}
                      deleteTodo={() => deleteTodo(todo.id)}
                    ></Task>
                  );
                })
              : todos.map((todo: todoProps) => {
                  return (
                    <Task
                      task={todo.task}
                      key={todo.id}
                      toggleCompleted={() => toggleCompleted(todo.id)}
                      deleteTodo={() => deleteTodo(todo.id)}
                    ></Task>
                  );
                })}
          </TaskList>
        </Styled.TaskListWrapper>
      </Styled.BodyModal>
    </Styled.ContainerModal>
  );
}
