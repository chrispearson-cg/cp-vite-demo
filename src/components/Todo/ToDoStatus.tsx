import { Chip } from '@mui/material';
import { TodoStatusLabels } from '../../models/todo';

const ToDoStatus = ({ status }: { status: number }) => {
  return (
    <>
      <Chip
        label={TodoStatusLabels[status]}
        color={
          status === 1 // Complete
            ? 'success'
            : 'default'
        }
      />
    </>
  );
};

export default ToDoStatus;
