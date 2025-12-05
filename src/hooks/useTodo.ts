import { useEffect, useState } from "react";
import type { TodoItem } from "../models/todo";

const useTodo = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchTodos = async () => {

            try {
                const response = await fetch("http://localhost:5000/api/todos");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const todos = await response.json();
                setTodos(todos);
                setError(null);

            } catch (error) {
                console.error("Error fetching todos:", error);
                setError(error instanceof Error ? error : new Error('Failed to fetch todos'));
            }
        };

        fetchTodos();
    }, []);

    return { todos, setTodos, error };
}

export default useTodo;