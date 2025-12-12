import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
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
  return (
    <>
      <div>
        <RadioGroup row defaultValue="All">
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
        {todos.map((todo) => (
          <ToDoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
      </Stack>
    </>
  );
};
export default ToDoList;
