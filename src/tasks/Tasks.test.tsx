import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Tasks from "./Tasks";
import userEvent from "@testing-library/user-event";
import {taskMock, todo} from "./Mocks";

describe("Task Component", () => {
	it("should render task", () => {
		render(<Tasks {...taskMock} />);

		const list = screen.getByText("Daniel");
		expect(list).toBeInTheDocument();
	});
	it("should complete task", () => {
		let newTask = todo;
		const handleClick = (targetName: string) => {
			newTask = newTask.map(task =>
				task.taskName === targetName ? {...task, completed: !task.completed} : task
			);
		};

		render(<Tasks {...taskMock} handleClick={() => handleClick("Daniel")} />);

		const list = screen.getByText("Daniel");
		fireEvent.click(list);
		expect(newTask[0]).toHaveProperty("completed", true);
	});
	it("should delete task", async () => {
		let newTodo = todo;
		const handleDelete = (targetID: number) => {
			return (newTodo = newTodo.filter(taskList => taskList.id !== targetID));
		};
		render(<Tasks {...taskMock} handleClick={() => {}} handleDelete={() => handleDelete(15)} />);

		const button = screen.getAllByRole("button");
		expect(newTodo).toHaveLength(3);
		userEvent.click(button[0]);
		expect(newTodo).toHaveLength(2);
	});
});
