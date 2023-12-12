import { AddIcon } from '../Icons';
import { AddNewItemBtn, AddNewItemInput, AddNewTaskContainer } from './styles';

export function NewTaskInput() {
  return (
    <AddNewTaskContainer>
      <AddNewItemInput type='text' placeholder='Add new item...' />
      <AddNewItemBtn>
        <AddIcon />
      </AddNewItemBtn>
    </AddNewTaskContainer>
  );
}
