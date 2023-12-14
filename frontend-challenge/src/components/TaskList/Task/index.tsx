import { useState } from 'react';
import * as Styled from './styles';
import { DeleteIcon, DoneIcon } from '../../Icons';
import { BtnHandleTaskStatus } from '../../BtnHandleTaskStatus';
import { todoProps } from '../../Modal';

export interface TaskProps {
  task: todoProps;
  toggleCompleted: () => void;
  deleteTodo: () => void;
}

export function Task(props: TaskProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Styled.TaskCard onClick={() => setIsActive(!isActive)}>
      <Styled.TaskLi>{props.task}</Styled.TaskLi>

      {isActive ? (
        <Styled.TaskButtonsWrapper>
          <BtnHandleTaskStatus onClick={props.deleteTodo}>
            <DeleteIcon />
          </BtnHandleTaskStatus>
          <BtnHandleTaskStatus onClick={props.toggleCompleted}>
            <DoneIcon />
          </BtnHandleTaskStatus>
        </Styled.TaskButtonsWrapper>
      ) : (
        ''
      )}
    </Styled.TaskCard>
  );
}
