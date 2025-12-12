import AddTodo from '../components/Todo/AddToDo';
import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos, addTodo, updateTodo } = useTodo();

  return (
    <>
      <h1>ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} />
    </>
  );
};

export default ToDo;
