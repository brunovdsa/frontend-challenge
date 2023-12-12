import { ReactNode } from 'react';
import { List } from './styles';

interface TaskListProps {
  children: ReactNode;
}

export function TaskList(props: TaskListProps) {
  return <List>{props.children}</List>;
}
