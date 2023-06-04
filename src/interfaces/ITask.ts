export interface ITask {
	id: number;
	taskName: string;
	completed: boolean;
	handleClick?: (id: React.SetStateAction<number>) => void;
	handleDelete?: (id: React.SetStateAction<number>) => void;
}
