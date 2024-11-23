import { renderWithRouter, screen,  } from "../../utils/test-utils";

import { Navigation } from "./index";

test("opens and closes WorksFilter on click of NavCodeIcon", async () => {
  
  const {user}=  renderWithRouter(<Navigation />);

    const navHamburger = screen.getByTestId("nav-hamburger");

   await user.click(navHamburger);

    screen.getByText("/portfolio/i");
});
