import { useEffect, useState } from "react";
import type { CreateTodoRequest, TodoItem } from "../models/todo";

const useTodo = () => {

    const baseUri = "http://localhost:5000/api/todos";

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const setTodosWrapper = (todos: TodoItem[]) => {
        setTodos(todos);
    }

    useEffect(() => {
        const fetchTodos = async () => {

            try {
                const response = await fetch(baseUri);
                const todos = await response.json();
                setTodos(todos);

            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    const postTodo = async (todo: CreateTodoRequest) => {
        const response = await fetch(baseUri, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });
        return await response.json();
    };

    const updatedTodo = async (todo: TodoItem) => {
        const response = await fetch(`${baseUri}/${todo.id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });
        return await response.json();
    }

    const addTodo = async (todo: CreateTodoRequest) => {
        const postedTodo = await postTodo(todo);
        setTodos([...todos, postedTodo]);
    };

    const updateTodo = async (todo: TodoItem) => {
        const putTodo = await updatedTodo(todo);
        setTodos(todos.map(t => t.id === putTodo.id ? putTodo : t));
    };

    return { todos, setTodos: setTodosWrapper, addTodo, updateTodo };
}

export default useTodo;