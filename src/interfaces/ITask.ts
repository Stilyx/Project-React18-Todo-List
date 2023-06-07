export interface ITask {
	TaskId: number;
	taskName: string;
	completed: boolean;
	handleClick?: (id: React.SetStateAction<number>) => void;
	handleDelete?: (id: React.SetStateAction<number>) => void;
}
