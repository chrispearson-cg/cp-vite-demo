import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos } = useTodo();

  return (
    <>
      <h1>ToDo List</h1>
      <ToDoList todos={todos} />
    </>
  );
};

export default ToDo;
