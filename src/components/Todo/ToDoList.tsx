import { Stack } from '@mui/material';
import type { TodoItem } from '../../models/todo';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, updateTodo }: { todos: TodoItem[], updateTodo: (todo: TodoItem) => void }) => {
  return (
    <>
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
