import {ChangeEvent, FormEvent} from 'react';

export interface ITaskForm {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	task: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
