// import dependencies
import React from "react";

import { IntroAbout } from "./index";
// import react-testing methods
import { render } from "../../../utils/test-utils";

test("snapshot", () => {
    const { asFragment } = render(<IntroAbout />);

    expect(asFragment()).toMatchSnapshot();
});
