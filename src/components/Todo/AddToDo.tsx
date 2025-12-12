import { Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import type { CreateTodoRequest } from '../../models/todo';

interface AddTodoProps {
  addTodo: (todo: CreateTodoRequest) => Promise<void>;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {

  const handleSubmit = async (formData: React.FormEvent<HTMLFormElement>) => {
    formData.preventDefault();
    await addTodo({
      description: formData.currentTarget.description.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        sx={{
          alignItems: 'center',
          m: 2,
        }}
      >
        <Grid size={10}>
          <TextField
            id="description"
            label="Think of a thing to do..."
            variant="outlined"
            required
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid size={2}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            size="large"
            type="submit"
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
