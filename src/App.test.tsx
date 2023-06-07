import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
	it("Should render Header on App", () => {
		render(<App />);
		expect(screen.getByText("TODO")).toBeInTheDocument();
	});
	it("Should render TaskForm on App", () => {
		render(<App />);
		const inputform = screen.getByPlaceholderText("Create a new todo…");
		expect(inputform).toBeInTheDocument();
	});

	it("Shoulrd render TaskTools", () => {
		render(<App />);
		const toolsText = screen.getByText("0 items left");
		expect(toolsText).toBeInTheDocument();
	});
});
