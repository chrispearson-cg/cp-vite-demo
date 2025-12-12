import { Avatar, Box, Grid, Typography } from '@mui/material';
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
          <Grid container spacing={2}>
            <Grid size="grow">
              <Avatar sizes="xs">{todo.id}</Avatar>
            </Grid>
            <Grid size="auto">
              <ToDoStatus isCompleted={todo.isCompleted} />
            </Grid>
          </Grid>
          <Typography>{todo.description}</Typography>
        </Box>
      </Item>
    </>
  );
};
export default ToDoItem;
