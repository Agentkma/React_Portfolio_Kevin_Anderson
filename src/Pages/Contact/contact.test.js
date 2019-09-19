// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, cleanup, waitForElement, getByPlaceholderText, getByTestId } from "@testing-library/react";

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
test('should give error message if name input too short', async () => {

    // The render method renders a React element into the DOM and returns utility functions for testing the component

    const { getByPlaceholderText, getByText } = render(
        <Contact />
    );
    const nameField = getByPlaceholderText('Your Name');
    const submitBtn = getByText('Send Message')


    // Act
    //fireEvent.change(nameField, { target: { value: 'jl' } });
    nameField.value = 'jl'

    fireEvent.click(submitBtn);

    const nameError = await waitForElement(() =>
        getByText('Too Short!')
    )


    // Assert
    expect(nameError).toBeInTheDocument();
});

test('should give error message if name input too long', () => {

    // The render method renders a React element into the DOM and returns utility functions for testing the component
    const { getByPlaceholderText, getByText } = render(
        <Contact />
    );
    const nameField = getByPlaceholderText('Your Name');



    // Act
    fireEvent.change(nameField, { target: { value: 'This Name is Way too Long To be allowed in the Name Field So you should consider putting in somehting with less than 70 characters. This Name is Way too Long To be allowed in the Name Field So you should consider putting in somehting with less than 70 characters. This Name is Way too Long To be allowed in the Name Field So you should consider putting in somehting with less than 70 characters' } });

    const nameError = getByText("Too Long!")

    // Assert
    expect(nameError).toBeInTheDocument();
});

// test('should have correct Legend message upon successful form submission', () => {
    //const emailFeild = getByPlaceholderText('your@email.com');
    // const messageFeild = getByPlaceholderText('Your Message');
// });
