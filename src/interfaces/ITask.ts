import {MouseEvent} from 'react';

export interface ITask {
	id: number;
	taskName: string;
	completed: boolean;
	handleClick?: (e: MouseEvent, id: number) => void;
	handleDelete?: (id: number) => void;
}
