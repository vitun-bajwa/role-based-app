export interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
    isFavorite: boolean;
    date: Date;
    // date?: Date; make it optional 
}