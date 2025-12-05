
// Really not happy with this but as good as I can do with out enabling
// enums which I don't know if I should.

export type TodoStatus = 'Pending' | 'Active' | 'Complete';

export const TodoStatusLabels: Record<number, TodoStatus> = {
    0: 'Pending',
    1: 'Active',
    2: 'Complete',
};


export interface TodoItem {
    id: number;
    description: string;
    status: number;
}