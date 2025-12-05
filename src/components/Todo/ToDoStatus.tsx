import { Chip } from '@mui/material';

const ToDoStatus = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <>
      <Chip
        label={isCompleted ? 'Complete' : 'Active'}
        color={
          isCompleted
            ? 'success'
            : 'default'
        }
      />
    </>
  );
};

export default ToDoStatus;
