// import dependencies
import React from "react";

// import react-testing methods
import { render, fireEvent, cleanup, getByPlaceholderText } from "@testing-library/react";

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
    const { getByTestId, getByText } = render(
        <Contact />
    );

    const legendText = getByText(`${legendMessage.default}`);
    // Assert
    expect(legendText).toBeInTheDocument();
});
// test('should not allow form submission if fields not validated', () => {
//     // Act

//     const nameField = getByPlaceholderText('Your Name');
//     const emailFeild = getByPlaceholderText('your@email.com');
//     const messageFeild = getByPlaceholderText('Your Message');


//     fireEvent.click(navHamburger);
// });

// test('should have correct Legend message upon successful form submission', () => {

// });
