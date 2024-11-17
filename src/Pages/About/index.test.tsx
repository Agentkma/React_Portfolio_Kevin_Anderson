// import dependencies
import React from "react";

import { About } from "./index";
// import react-testing methods
import { render } from "test-utils";

test("snapshot", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
});
