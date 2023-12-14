import { ReactNode } from 'react';

import * as Styled from './styles';

interface BtnFilterTaskStatusProps {
  children: ReactNode;

  onClick?: () => void;
}

export function BtnHandleTaskStatus(props: BtnFilterTaskStatusProps) {
  return (
    <Styled.ButtonTaskStatus onClick={props.onClick}>
      {props.children}
    </Styled.ButtonTaskStatus>
  );
}
