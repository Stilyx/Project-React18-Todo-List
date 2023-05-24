import React, {MouseEvent} from 'react';

// Styles
import './Tasks.css';

// inteface
import {ITask} from '../interfaces/ITask';

function Tasks({id, taskName, completed, handleClick, handleDelete}: ITask) {
	return (
		<div className='tasks'>
			<li
				key={id}
				className={completed ? 'checked' : ''}
				onClick={(e: MouseEvent) => handleClick!(e, id)}
			>
				{taskName}
			</li>
			<span className='delete' onClick={() => handleDelete!(id)}></span>
		</div>
	);
}

export default Tasks;