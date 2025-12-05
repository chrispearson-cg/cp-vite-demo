import { Chip } from '@mui/material';
import { TodoStatusLabels } from '../../models/todo';

const ToDoStatus = ({ status }: { status: number }) => {
  return (
    <>
      <Chip
        label={TodoStatusLabels[status]}
        color={
          status === 2 // Complete
            ? 'success'
            : status === 1 // Active
            ? 'warning'
            : 'default'
        }
      />
    </>
  );
};

export default ToDoStatus;
