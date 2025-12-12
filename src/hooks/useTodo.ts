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
        const rsp = await fetch(baseUri, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });
        return await rsp.json();
    };

    const addTodo = async (todo: CreateTodoRequest) => {
        const postedTodo = await postTodo(todo);
        setTodos([...todos, postedTodo]);
    };

    return { todos, setTodos: setTodosWrapper, addTodo };
}

export default useTodo;