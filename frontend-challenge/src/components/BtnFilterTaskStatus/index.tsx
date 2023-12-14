import { ReactNode } from 'react';
import { ManageTaskBtn } from './styles';

interface ManageTaskStatusBtnProps {
  children: ReactNode;
  onClick: any;
}

export function BtnFilterTaskStatus(props: ManageTaskStatusBtnProps) {
  return (
    <ManageTaskBtn onClick={props.onClick}>{props.children}</ManageTaskBtn>
  );
}
