import PageTitle from '../components/PageTitle';
import AddTodo from '../components/Todo/AddToDo';
import ToDoList from '../components/Todo/ToDoList';
import useTodo from '../hooks/useTodo';

const ToDo = () => {
  const { todos, addTodo, updateTodo } = useTodo();

  return (
    <>
      <PageTitle title="ToDo List" />
      <AddTodo addTodo={addTodo} />
      <ToDoList todos={todos} updateTodo={updateTodo} />
    </>
  );
};

export default ToDo;
