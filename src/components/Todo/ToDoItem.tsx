import { Avatar, Box, Typography } from '@mui/material';
import Item from '@mui/material/Stack';
import { type TodoItem } from '../../models/todo';
import ToDoStatus from './ToDoStatus';

const ToDoItem = ({ todo }: { todo: TodoItem }) => {
  return (
    <>
      <Item>
        <Box
          sx={{
            width: '400px',
            padding: 2,
            border: '1px solid grey',
            borderRadius: 2,
          }}
        >
          <Avatar sizes='xs'>{todo.id}</Avatar> <ToDoStatus isCompleted={todo.isCompleted} />
          <Typography>{todo.description}</Typography>
        </Box>
      </Item>
    </>
  );
};
export default ToDoItem;
