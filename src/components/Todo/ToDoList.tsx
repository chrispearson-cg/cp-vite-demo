import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { useState } from 'react';
import type { TodoItem } from '../../models/todo';
import ToDoItem from './ToDoItem';

const status = ['All', 'Completed', 'Active'];

const ToDoList = ({
  todos,
  updateTodo,
}: {
  todos: TodoItem[];
  updateTodo: (todo: TodoItem) => void;
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const filteredTodos = todos.filter((todo) => {
    if (selectedStatus === 'All') return true;
    if (selectedStatus === 'Completed') return todo.isCompleted;
    if (selectedStatus === 'Active') return !todo.isCompleted;
    return true;
  });

  return (
    <>
      <div>
        <RadioGroup 
          row 
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {status.map((stat) => (
            <FormControlLabel
              key={stat}
              value={stat}
              control={<Radio />}
              label={stat}
            />
          ))}
        </RadioGroup>
      </div>
      <Stack
        spacing={2}
        direction={'column'}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {filteredTodos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
      </Stack>
    </>
  );
};
export default ToDoList;
