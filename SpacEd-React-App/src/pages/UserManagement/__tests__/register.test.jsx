import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "../Register";
import "@testing-library/jest-dom";

// Mock useAuth hook
jest.mock("../../../context/authContext", () => ({
  useAuth: () => ({
    userLoggedIn: false, // or provide any value you want for userLoggedIn
  }),
}));

// Mock doCreateUserWithEmailAndPassword function
import * as auth from "../../../firebase/auth";
auth.doCreateUserWithEmailAndPassword = jest.fn().mockResolvedValue(null);

describe("Register Component", () => {
  test("renders the registration form", () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    // Check if all necessary elements are rendered
    expect(getByLabelText("Your email")).toBeInTheDocument();
    expect(getByPlaceholderText("name@company.com")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByLabelText("Confirm password")).toBeInTheDocument();
    expect(getByText("Already have an account?")).toBeInTheDocument();
    expect(getByText("Login here")).toBeInTheDocument();
  });

  test("handles form submission", async () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const emailInput = getByLabelText("Your email");
    const passwordInput = getByLabelText("Password");
    const confirmPasswordInput = getByLabelText("Confirm password");
    const registerButton = getByRole("button", { name: "Create an account" }); // Select the button by role

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(registerButton);

    // Wait for the async doCreateUserWithEmailAndPassword function to be called
    await waitFor(() => {
      expect(auth.doCreateUserWithEmailAndPassword).toHaveBeenCalledWith(
        "test@example.com",
        "password123"
      );
    });
  });
  
});
