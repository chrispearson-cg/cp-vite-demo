export const TodoStatus = {
  Pending: 0,
  Active: 1,
  Complete: 2
} as const;

export type TodoStatus = typeof TodoStatus[keyof typeof TodoStatus];

export interface TodoItem {
  id: number;
  description: string;
  status: TodoStatus;
}