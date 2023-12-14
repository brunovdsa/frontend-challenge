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
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const handlechange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.toggleCompleted();
    setIsPressed(!isPressed);
    if (e.currentTarget.className === 'pending') {
      e.currentTarget.className = 'complete';
    } else {
      e.currentTarget.className = 'pending';
    }
  };
  return (
    <Styled.TaskCard onClick={() => setIsActive(!isActive)}>
      <Styled.TaskP className={isPressed ? 'complete' : 'pending'}>
        {props.task}
      </Styled.TaskP>

      {isActive ? (
        <Styled.TaskButtonsWrapper>
          <BtnHandleTaskStatus onClick={props.toggleCompleted}>
            <DeleteIcon />
          </BtnHandleTaskStatus>
          <BtnHandleTaskStatus
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handlechange(e)
            }
          >
            <DoneIcon />
          </BtnHandleTaskStatus>
        </Styled.TaskButtonsWrapper>
      ) : (
        ''
      )}
    </Styled.TaskCard>
  );
}
