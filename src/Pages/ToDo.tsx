import { Typography } from '@mui/material';
import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos } = useTodo();

  return (
    <>
      <Typography variant="h2" gutterBottom>
        ToDo List
      </Typography>
      <ToDoList todos={todos} />
    </>
  );
};

export default ToDo;
