import { AddIcon } from '../Icons';
import { AddNewItemBtn, AddNewItemInput, AddNewTaskContainer } from './styles';

interface NewTaskInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | undefined;
}

export function NewTaskInput(props: NewTaskInputProps) {
  return (
    <AddNewTaskContainer>
      <AddNewItemInput
        type='text'
        value={props.value}
        placeholder='Add new item...'
        onChange={props.onChange}
      />
      <AddNewItemBtn type='submit'>
        <AddIcon />
      </AddNewItemBtn>
    </AddNewTaskContainer>
  );
}
