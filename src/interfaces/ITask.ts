export interface ITask {
	id: number;
	taskName: string;
	completed: boolean;
	handleClick?: (id: number) => void;
	handleDelete?: (id: number) => void;
}
