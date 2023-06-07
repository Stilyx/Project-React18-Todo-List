import React, {useState, ChangeEvent, FormEvent, MouseEvent, useEffect} from "react";

// Style
import "./App.css";

// Components
import Header from "./header/Header";
import TaskForm from "./taskForm/TaskForm";
import Tasks from "./tasks/Tasks";
import TaskTools from "./taskTools/TaskTools";

// Utils
import {getLocalStorage} from "./utils/getTasksInLocalStorage";
import {changeTheme} from "./utils/changeTheme";

// Interfaces
import {ITask} from "./interfaces/ITask";

function App(): JSX.Element {
	const [task, setTask] = useState<string>("");
	const [todo, setTodo] = useState<ITask[]>(getLocalStorage());
	const [filterProduct, setFilterProduct] = useState("all");
	const [filterLi, setFilterLi] = useState(todo);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(todo));

		if (filterProduct === "all") return setFilterLi([...todo]);

		if (filterProduct === "active") {
			return setFilterLi([
				...todo.filter(({completed}) => (completed === false ? {...todo} : null))
			]);
		}

		if (filterProduct === "completed") {
			return setFilterLi([
				...todo.filter(({completed}) => (completed === true ? {...todo} : null))
			]);
		}
	}, [todo, filterProduct]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setTask(e.target.value);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const randomId = () => Math.floor(Math.random() * 10000);
		const newTask = {TaskId: randomId(), taskName: task, completed: false};

		if (newTask.taskName.trim() === "") return;

		setTodo([...todo, newTask]);
		setFilterLi([...todo, newTask]);
		setTask("");
	};

	const handleDelete = (targetId: number) => {
		const deleteTarget = todo.filter(taskList => taskList.TaskId !== targetId);
		setTodo(deleteTarget);
	};

	const handleClick = (targetId: number) => {
		const newTasks = todo.map(task => {
			if (task.TaskId === targetId) return {...task, completed: !task.completed};
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
					{filterLi
						.map(({taskName, TaskId, completed}: ITask) => (
							<Tasks
								key={TaskId}
								TaskId={TaskId}
								taskName={taskName}
								completed={completed}
								handleClick={() => handleClick(TaskId)}
								handleDelete={() => handleDelete(TaskId)}
							/>
						))
						.reverse()}
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
