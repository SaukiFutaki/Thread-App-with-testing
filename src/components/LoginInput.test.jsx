/**
 * scenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import { describe, expect, it, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Logininput from "./LoginInput";
import userEvent from "@testing-library/user-event";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

describe("LoginInput component", () => {
  afterEach(() => {
    cleanup();
  });
  it("should handle username typing correctly", async () => {
    // Arrange
    render(<Logininput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText("Email");

    // Action
    await userEvent.type(usernameInput, "Emailtest");

    // Assert
    expect(usernameInput).toHaveValue("Emailtest");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    render(<Logininput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // Action
    await userEvent.type(passwordInput, "passwordtest");

    // Assert
    expect(passwordInput).toHaveValue("passwordtest");
  });

  it("should call login function when login button is clicked", async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<Logininput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(usernameInput, "Emailtest");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "passwordtest");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: "Emailtest",
      password: "passwordtest",
    });
  });
});
