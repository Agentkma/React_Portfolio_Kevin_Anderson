import React from "react";


import { screen, renderWithRouter, userEvent, fireEvent } from "../../utils/test-utils";

import { legendMessage } from "./Form";

import { Contact } from "./index";

test("should have correct Legend text upon first view", () => {

    renderWithRouter(<Contact />, { route: "/contact" });

    const legendText = screen.getByText(`${legendMessage.default}`);
 
    expect(legendText).toBeInTheDocument();
});

test("should have correct error messages if inputs left blank", async () => {
    renderWithRouter(<Contact />, { route: "/contact" });

    const submitBtn = screen.getByText("Send Message");


    await userEvent.click(submitBtn);

    const nameFieldError = await screen.findByText("Name Required");

    const emailFieldError = await screen.findByText("Email Required");
    const textFieldError = await screen.findByText("Message Required");
    expect(nameFieldError).toBeInTheDocument();
    expect(emailFieldError).toBeInTheDocument();
    expect(textFieldError).toBeInTheDocument();
});
test("should give error message if name input too short", async () => {
   
    renderWithRouter(<Contact />, { route: "/contact" });
    const nameField = screen.getByPlaceholderText("Your Name");
    const submitBtn = screen.getByText("Send Message");

    fireEvent.change(nameField, { target: { value: "jl" } });

  

   await userEvent.click(submitBtn);

    const nameError = await screen.findByText("Too Short!");

    expect(nameError).toBeInTheDocument();
});
