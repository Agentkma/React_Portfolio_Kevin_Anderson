// import dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import react-testing methods
import { render, fireEvent, cleanup } from "@testing-library/react";

// add custom jest matchers from jest-dom
// test test
import "jest-dom/extend-expect";

// the component to test
import { Navigation } from "./index";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("opens and closes WorksFilter on click of NavCodeIcon", () => {
    // Arrange

    // The render method renders a React element into the DOM and returns utility functions for testing the component
    const { getByTestId, getByText } = render(
        <Router>
            <Navigation />
        </Router>
    );
    const navHamburger = getByTestId("nav-hamburger");

    // Act
    fireEvent.click(navHamburger);

    const portfolioNav = getByText("/portfolio/i");
    // Assert
    expect(portfolioNav).toBeInTheDocument();
});
