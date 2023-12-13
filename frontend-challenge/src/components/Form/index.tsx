import { FormEvent, useState } from 'react';
import { NewTaskInput } from '../NewTaskInput';

interface FormProps {
  addTodo: (taskValue: any) => void;
}

export function Form(props: FormProps) {
  const [value, setValue] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.addTodo(value);

    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <NewTaskInput onChange={handleChange} value={value} />
    </form>
  );
}
