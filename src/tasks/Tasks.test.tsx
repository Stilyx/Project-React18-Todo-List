import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tasks from "./Tasks";
import userEvent from "@testing-library/user-event";

describe("Task Component", () => {
	it("should render task", () => {
		render(
			<Tasks
				TaskId={10}
				taskName='Oi'
				completed={false}
				handleClick={() => {}}
				handleDelete={() => {}}
			/>
		);

		const list = screen.getByText("Oi");
		expect(list).toBeInTheDocument();
	});
	it("should complete task", () => {
		let todo = [
			{id: 15, taskName: "Daniel", completed: false},
			{id: 11, taskName: "joão", completed: false},
			{id: 13, taskName: "gustavo", completed: false}
		];
		const handleClick = (targetName: string) => {
			const newTasks = todo.map(task => {
				if (task.taskName === targetName) return {...task, completed: !task.completed};
				return task;
			});

			todo = newTasks;
		};

		render(
			<Tasks
				TaskId={10}
				key={10}
				taskName='Daniel'
				completed={false}
				handleClick={() => handleClick("Daniel")}
			/>
		);

		const list = screen.getByText("Daniel");
		fireEvent.click(list);
		expect(todo[0]).toHaveProperty("completed", true);
	});
	it("should delete task", async () => {
		let todo = [
			{id: 15, taskName: "Daniel"},
			{id: 11, taskName: "joão"},
			{id: 13, taskName: "gustavo"}
		];
		const handleDelete = (targetID: number) => {
			const deleteTarget = todo.filter(taskList => taskList.id !== targetID);
			todo = deleteTarget;
		};

		render(
			<Tasks
				TaskId={10}
				key={10}
				taskName='teste'
				completed={true}
				handleClick={() => {}}
				handleDelete={() => handleDelete(15)}
			/>
		);

		const button = screen.getAllByRole("button");
		expect(todo).toHaveLength(3);
		userEvent.click(button[0]);
		expect(todo).toHaveLength(2);
	});
});
