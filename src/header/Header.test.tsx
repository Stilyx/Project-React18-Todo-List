import "@testing-library/jest-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
	it("should have title", () => {
		render(<Header changeTheme={jest.fn()} />);
		const title = screen.getByText("TODO");
		expect(title).toBeInTheDocument();
	});
	it("should have logo class in image", () => {
		render(<Header changeTheme={jest.fn()} />);
		const logo = screen.getByAltText("logoimage");
		expect(logo).toBeInTheDocument();
	});
	it("should call changetheme", () => {
		const changeTheme = jest.fn();
		render(<Header changeTheme={() => changeTheme()} />);
		const logoButton = screen.getByAltText("logoimage");
		fireEvent.click(logoButton);
		expect(changeTheme).toBeCalledTimes(1);
	});
});
