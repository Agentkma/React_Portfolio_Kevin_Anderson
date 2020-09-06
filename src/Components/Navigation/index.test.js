// import dependencies
import React from "react";

// import react-testing methods
import { renderWithRouter, screen, userEvent } from "test-utils";

// the component to test
import { Navigation } from "./index";

xtest("opens and closes WorksFilter on click of NavCodeIcon", () => {
    // Arrange
    renderWithRouter(<Navigation />);
    // The render method renders a React element into the DOM and returns utility functions for testing the component

    const navHamburger = screen.getByTestId("nav-hamburger");

    // Act
    userEvent.click(navHamburger);

    // Assert
    screen.getByText("/portfolio/i");
});
