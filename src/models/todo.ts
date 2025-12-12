
export interface TodoItem {
    id: number;
    description: string;
    isCompleted: boolean;
}

export interface CreateTodoRequest {
    description: string;
}