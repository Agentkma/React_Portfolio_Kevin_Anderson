import { About } from "./index";

import { renderWithRouter } from "../../utils/test-utils";

test("snapshot", () => {
    const { asFragment } = renderWithRouter(<About />, { route: "/about" });

    expect(asFragment()).toMatchSnapshot();
});
