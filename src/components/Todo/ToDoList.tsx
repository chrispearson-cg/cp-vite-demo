import type { TodoItem } from '../../models/todo';

const ToDoList = ({todos}: {todos: TodoItem[]}) => {
  return <div>To Do List Component</div>;

  todos.map(todo => (
    <div key={todo.id}>
      <h3>{todo.description}</h3>
      </div>
    ));
};
export default ToDoList;
