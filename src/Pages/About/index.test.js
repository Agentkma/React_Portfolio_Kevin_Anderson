// import dependencies
import React from "react";

import { About } from "./index";
// import react-testing methods
import { renderWithRouter } from "test-utils";

test("snapshot", () => {
    const { asFragment } = renderWithRouter(<About />);

    expect(asFragment()).toMatchSnapshot();
});
