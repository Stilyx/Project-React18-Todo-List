import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import TaskTools from "./TaskTools";

describe("TaskTools component", () => {
	it("should render items left", () => {
		render(<TaskTools handleFilter={() => {}} handleClearCompleted={() => {}} todo={3} />);
		const itemsLeft = screen.getByText("3 items left");
		expect(itemsLeft).toBeInTheDocument();
	});
	it("should render tools inputs", () => {
		render(<TaskTools handleFilter={() => {}} handleClearCompleted={() => {}} todo={3} />);
		const all = screen.getByLabelText("All");
		const active = screen.getByLabelText("Active");
		const completed = screen.getByLabelText("Completed");

		expect(all).toBeInTheDocument();
		expect(active).toBeInTheDocument();
		expect(completed).toBeInTheDocument();
	});

	it("should shoot change event on click radios", () => {
		const handleFilter = jest.fn();
		render(
			<TaskTools handleFilter={() => handleFilter()} handleClearCompleted={() => {}} todo={3} />
		);
		const all = screen.getByLabelText("All");
		const active = screen.getByLabelText("Active");
		const completed = screen.getByLabelText("Completed");
		fireEvent.click(active);
		fireEvent.click(completed);
		fireEvent.click(all);
		expect(handleFilter).toBeCalledTimes(3);
	});
});
