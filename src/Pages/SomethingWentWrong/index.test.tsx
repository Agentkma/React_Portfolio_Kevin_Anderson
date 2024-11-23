// import dependencies
import React from "react";

import { SomethingWentWrong } from "./index";
// import react-testing methods
import { render } from "../../utils/test-utils";

test("snapshot", () => {
    const { asFragment } = render(<SomethingWentWrong />);

    expect(asFragment()).toMatchSnapshot();
});
