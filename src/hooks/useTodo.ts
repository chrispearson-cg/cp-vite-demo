import { useEffect, useState } from "react";
import type { TodoItem } from "../models/todo";

const useTodo = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    const setTodosWrapper = (todos: TodoItem[]) => {
        setTodos(todos);
    }

    useEffect(() => {
        const fetchTodos = async () => {

            try {
                const response = await fetch("http://localhost:5000/api/todos");
                const todos = await response.json();
                setTodos(todos);

            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    return { todos, setTodos: setTodosWrapper };
}

export default useTodo;