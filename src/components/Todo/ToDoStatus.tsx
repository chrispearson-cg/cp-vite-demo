import { Chip } from '@mui/material';

const ToDoStatus = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <>
      <Chip
        label={isCompleted ? 'Complete' : 'Active'}
        color={
          isCompleted
            ? 'success'
            : 'primary'
        }
      />
    </>
  );
};

export default ToDoStatus;
