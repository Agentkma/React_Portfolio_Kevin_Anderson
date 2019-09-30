// // import dependencies
// import React from "react";

// // import react-testing methods
// import { render, fireEvent, cleanup } from "@testing-library/react";

// // add custom jest matchers from jest-dom
// // test test
// import "jest-dom/extend-expect";

// // the component to test
// import { NavHamburger } from "./index";

// // automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

// const toggleWorksFilter = jest.fn();

// test("opens and closes WorksFilter on click of NavCodeIcon", () => {
//     // Arrange

//     // The render method renders a React element into the DOM and returns utility functions for testing the component
//     const { getByTestId } = render(
//         <NavHamburger toggleWorksFilter={toggleWorksFilter} />
//     );
//     const navCodeIconBtn = getByTestId("nav-code-icon");
//     // Act
//     fireEvent.click(navCodeIconBtn);

//     // Assert
//     expect(toggleWorksFilter).toHaveBeenCalledTimes(1);
// });
