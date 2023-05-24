import {MouseEvent} from 'react';

export interface ITaskTools {
	todo: number;
	handleFilter: (e: MouseEvent<HTMLInputElement>) => void;
	handleClearCompleted: () => void;
}
