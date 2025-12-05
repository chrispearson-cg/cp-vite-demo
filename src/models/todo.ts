
// Really not happy with this but as good as I can do with out enabling
// enums which I don't know if I should.

export type TodoStatus = 'Active' | 'Complete';

export const TodoStatusLabels: Record<number, TodoStatus> = {
    0: 'Active',
    1: 'Complete',
};


export interface TodoItem {
    id: number;
    description: string;
    status: number;
}