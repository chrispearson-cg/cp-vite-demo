import { Typography } from '@mui/material';
import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos, error } = useTodo();

  return (
    <>
      <Typography variant="h2" gutterBottom>
        ToDo List
      </Typography>
      {error && (
        <Typography color="error" gutterBottom>
          Error loading todos: {error.message}
        </Typography>
      )}
      <ToDoList todos={todos} />
    </>
  );
};

export default ToDo;
