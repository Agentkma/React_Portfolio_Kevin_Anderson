// import dependencies
import React from "react";

// import react-testing methods

import { render, fireEvent, cleanup, waitForElement } from "@testing-library/react";

// add custom jest matchers from jest-dom
// test test
import "jest-dom/extend-expect";

import { legendMessage } from './Form'
// the component to test
import { Contact } from "./index";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);



test("should have correct Legend text upon first view", () => {
    // Arrange

    // The render method renders a React element into the DOM and returns utility functions for testing the component
    const { getByText } = render(
        <Contact />
    );

    const legendText = getByText(`${legendMessage.default}`);
    // Assert
    expect(legendText).toBeInTheDocument();
});

test('should have correct error messages if inputs left blank', async () => {
    const { getByText } = render(
        <Contact />
    );

    const submitBtn = getByText('Send Message')


    // Assert

    fireEvent.click(submitBtn);

    const nameFieldError = await waitForElement(() =>
        getByText('Name Required')
    );

    const emailFieldError = await waitForElement(() =>
        getByText('Email Required')
    );

    const textFieldError = await waitForElement(() =>
        getByText('Message Required')
    );

    expect(nameFieldError).toBeInTheDocument();
    expect(emailFieldError).toBeInTheDocument();
    expect(textFieldError).toBeInTheDocument();


});
test('should give error message if name input too short', async () => {

    // The render method renders a React element into the DOM and returns utility functions for testing the component

    const { getByPlaceholderText, getByText } = render(
        <Contact />
    );
    const nameField = getByPlaceholderText('Your Name');
    const submitBtn = getByText('Send Message')


    // Act
    fireEvent.change(nameField, { target: { value: 'jl' } });


    // Assert

    fireEvent.click(submitBtn);

    const nameError = await waitForElement(() =>
        getByText('Too Short!')
    )

    expect(nameError).toBeInTheDocument();

});


