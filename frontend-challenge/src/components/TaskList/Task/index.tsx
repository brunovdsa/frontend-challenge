import { ReactNode } from 'react';
import { TaskCard } from './styles';

export interface TaskProps {
  children: ReactNode;
}

export function Task(props: TaskProps) {
  return <TaskCard>{props.children}</TaskCard>;
}
