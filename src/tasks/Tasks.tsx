// Styles
import "./Tasks.css";

// inteface
import {ITask} from "../interfaces/ITask";

function Tasks({TaskId, taskName, completed, handleClick, handleDelete}: ITask) {
	return (
		<ul className='tasks'>
			<li key={TaskId} className={completed ? "checked" : ""} onClick={() => handleClick!(TaskId)}>
				{taskName}
			</li>
			<button className='delete' onClick={() => handleDelete!(TaskId)}></button>
		</ul>
	);
}

export default Tasks;
