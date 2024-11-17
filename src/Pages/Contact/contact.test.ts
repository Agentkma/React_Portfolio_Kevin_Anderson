// import dependencies
import React from "react";

// import react-testing methods

import { screen, render, userEvent, fireEvent } from "test-utils";

import { legendMessage } from "./Form";
// the component to test
import { Contact } from "./index";

test("should have correct Legend text upon first view", () => {
    // Arrange

    // The render method renders a React element into the DOM and returns utility functions for testing the component
    render(<Contact />);

    const legendText = screen.getByText(`${legendMessage.default}`);
    // Assert
    expect(legendText).toBeInTheDocument();
});

test("should have correct error messages if inputs left blank", async () => {
    render(<Contact />);

    const submitBtn = screen.getByText("Send Message");

    // Assert

    userEvent.click(submitBtn);

    const nameFieldError = await screen.findByText("Name Required");

    const emailFieldError = await screen.findByText("Email Required");
    const textFieldError = await screen.findByText("Message Required");
    expect(nameFieldError).toBeInTheDocument();
    expect(emailFieldError).toBeInTheDocument();
    expect(textFieldError).toBeInTheDocument();
});
test("should give error message if name input too short", async () => {
    // The render method renders a React element into the DOM and returns utility functions for testing the component

    render(<Contact />);
    const nameField = screen.getByPlaceholderText("Your Name");
    const submitBtn = screen.getByText("Send Message");

    // Act
    fireEvent.change(nameField, { target: { value: "jl" } });

    // Assert

    userEvent.click(submitBtn);

    const nameError = await screen.findByText("Too Short!");

    expect(nameError).toBeInTheDocument();
});
