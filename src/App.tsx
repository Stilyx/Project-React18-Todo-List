import React, {useState, ChangeEvent, FormEvent, MouseEvent, useEffect} from 'react';

// Style
import './App.css';

// Components
import Header from './header/Header';
import TaskForm from './taskForm/TaskForm';
import Tasks from './tasks/Tasks';
import TaskTools from './taskTools/TaskTools';

// Utils
import {getLocalStorage} from './utils/getTasksInLocalStorage';
import {changeTheme} from './utils/changeTheme';

// Interfaces
import {ITask} from './interfaces/ITask';

function App(): JSX.Element {
	const [task, setTask] = useState<string>('');
	const [todo, setTodo] = useState<ITask[]>(getLocalStorage());
	const [filterProduct, setFilterProduct] = useState('all');
	const [filterLi, setFilterLi] = useState(todo);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(todo));

		if (filterProduct === 'all') return setFilterLi([...todo]);

		if (filterProduct === 'active') {
			setFilterLi([
				...todo.filter(task => {
					if (task.completed === false) {
						return {
							taskName: task.taskName,
							id: task.id,
							completed: task.completed
						};
					}
					return null;
				})
			]);
		}
		if (filterProduct === 'completed') {
			return setFilterLi([
				...todo.filter(task => {
					if (task.completed === true) {
						return {
							taskName: task.taskName,
							id: task.id,
							completed: task.completed
						};
					}
					return null;
				})
			]);
		}
	}, [todo, filterProduct]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setTask(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const randomId = () => Math.floor(Math.random() * 10000);
		const newTask = {id: randomId(), taskName: task, completed: false};

		if (newTask.taskName.trim() === '') return;

		setTodo([...todo, newTask]);
		setFilterLi([...todo, newTask]);
		setTask('');
	};

	const handleDelete = (targetID: number) => {
		const deleteTarget = todo.filter(taskList => taskList.id !== targetID);
		setTodo(deleteTarget);
	};

	const handleClick = (e: MouseEvent, targetID: number) => {
		const newTasks = todo.map(task => {
			if (task.id === targetID) return {...task, completed: !task.completed};
			return task;
		});

		setTodo(newTasks);
	};

	const handleFilter = (e: MouseEvent) => {
		if (e.target instanceof Element) setFilterProduct(e.target.id);
	};

	const handleClearCompleted = () => {
		const newTasks = todo.filter(taskList => taskList.completed !== true);
		setTodo(newTasks);
	};

	return (
		<div className='container'>
			<Header changeTheme={changeTheme} />
			<TaskForm
				handleSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
				task={task}
				handleChange={e => handleChange(e)}
			/>
			<div className='tasksContainer'>
				<ul className='taskList'>
					{filterLi.map(task => (
						<Tasks
							key={task.id}
							id={task.id}
							taskName={task.taskName}
							completed={task.completed}
							handleClick={e => handleClick(e, task.id)}
							handleDelete={() => handleDelete(task.id)}
						/>
					))}
				</ul>

				<TaskTools
					todo={todo.length}
					handleFilter={e => handleFilter(e)}
					handleClearCompleted={handleClearCompleted}
				/>
			</div>
		</div>
	);
}

export default App;
