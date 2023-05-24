import React from 'react';

// Styles
import './TaskForm.css';

// interface
import {ITaskForm} from '../interfaces/ITaskForm';

function TaskForm({handleSubmit, task, handleChange}: ITaskForm): JSX.Element {
	return (
		<form action='#' className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Create a new todo…'
				autoComplete='off'
				value={task}
				onChange={handleChange}
			/>
		</form>
	);
}

export default TaskForm;
