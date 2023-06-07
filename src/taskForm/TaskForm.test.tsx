import "@testing-library/jest-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "./TaskForm";

describe("TaskForm Component", () => {
	it("should render input on form", () => {
		render(<TaskForm handleSubmit={() => {}} task='Oi' handleChange={() => {}} />);
		const inputForm = screen.getByPlaceholderText("Create a new todo…");
		expect(inputForm).toBeInTheDocument();
	});
	it("should submit form", () => {
		const submitForm = jest.fn();
		render(<TaskForm handleSubmit={() => submitForm()} task='Oi' handleChange={() => {}} />);
		const inputForm = screen.getByPlaceholderText("Create a new todo…");
		fireEvent.submit(inputForm);
		expect(submitForm).toHaveBeenCalled();
	});
	it("should change input value", () => {
		const handleChange = jest.fn();
		render(<TaskForm handleSubmit={() => {}} task='Oi' handleChange={() => handleChange()} />);
		const inputForm = screen.getByPlaceholderText("Create a new todo…");
		userEvent.type(inputForm, "Oiiii");
		expect(handleChange).toHaveBeenCalled();
	});
});
