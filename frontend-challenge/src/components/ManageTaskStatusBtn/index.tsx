import { ReactNode } from 'react';
import { ManageTaskBtn } from './styles';

interface ManageTaskStatusBtnProps {
  children: ReactNode;
}

export function ManageTaskStatusBtn(props: ManageTaskStatusBtnProps) {
  return <ManageTaskBtn>{props.children}</ManageTaskBtn>;
}
