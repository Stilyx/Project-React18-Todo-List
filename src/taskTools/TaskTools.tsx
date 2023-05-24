import React, {MouseEvent} from 'react';

// Styles
import './TaskTools.css';

// interface
import {ITaskTools} from '../interfaces/ITaskTools';

function TaskTools({todo, handleFilter, handleClearCompleted}: ITaskTools) {
	return (
		<div className='taskTools'>
			<p>{todo} items left</p>
			<div className='tools' onChange={(e: MouseEvent<HTMLInputElement>) => handleFilter(e)}>
				<input type='radio' name='toolOption' id='all' defaultChecked />
				<label htmlFor='all'>All</label>
				<input type='radio' name='toolOption' id='active' />
				<label htmlFor='active'>Active</label>
				<input type='radio' name='toolOption' id='completed' />
				<label htmlFor='completed'>Completed</label>
			</div>
			<p className='clear' onClick={handleClearCompleted}>
				Clear Completed
			</p>
		</div>
	);
}

export default TaskTools;
