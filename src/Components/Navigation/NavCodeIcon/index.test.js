// import dependencies
import React from "react";

// import react-testing methods
import {
    render,
    fireEvent,
    cleanup,
    waitForElement
} from "react-testing-library";

// add custom jest matchers from jest-dom
import "jest-dom/extend-expect";

// the component to test
import NavCodeIcon from "./index";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const toggleWorksFilter = jest.fn();

test("opens and closes WorksFilter on click of NavCodeIcon", () => {
    // Arrange
    // Act
    // Assert

    // The render method renders a React element into the DOM and returns utility functions for testing the component
    const url = "/greeting";
    const { getByText, getByTestId, container, asFragment } = render(
        <NavCodeIcon toggleWorksFilter={toggleWorksFilter} />
    );

    fireEvent.click(getByTestId("nav-code-icon"));

    expect(toggleWorksFilter).toHaveBeenCalledTimes(1);

    // snapshots work great with regular DOM nodes!
    //expect(container.firstChild).toMatchSnapshot();

    // you can also use get a `DocumentFragment`,
    // which is useful if you want to compare nodes across render
    // expect(asFragment()).toMatchSnapshot();
});
