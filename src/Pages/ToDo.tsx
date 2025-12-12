import AddTodo from '../components/Todo/AddToDo';
import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos, addTodo } = useTodo();

  return (
    <>
      <h1>ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <ToDoList todos={todos} />
    </>
  );
};

export default ToDo;
