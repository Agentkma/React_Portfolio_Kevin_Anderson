import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ReactNode } from "react";

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, `Test page at route ${route}`, route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithRouter, userEvent };
