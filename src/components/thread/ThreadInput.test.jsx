/**
 * Testing Scenario
 *
 * - ThreadInput component
 *   - should handle judul typing correctly
 *   - should handle kategori typing correctly
 *   - should handle apa yang mau kamu diskusikan ? typing correctly
 */

import { describe, it, expect, vi, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThreadInput from "./ThreadInput";

describe("ThreadInput component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render correctly", async () => {
    const addThreadMock = vi.fn();
    render(<ThreadInput addThread={addThreadMock} />);

    expect(await screen.findByPlaceholderText("Judul")).toBeTruthy();
    expect(await screen.findByPlaceholderText("Kategori")).toBeTruthy();
    expect(
      await screen.findByPlaceholderText("apa yang mau kamu diskusikan ?")
    ).toBeTruthy();
    expect(await screen.findByRole("button", { name: "Kirim" })).toBeTruthy();
  });

  it("should call addThread function with correct arguments when button is clicked", async () => {
    const addThreadMock = vi.fn();
    render(<ThreadInput addThread={addThreadMock} />);

    await userEvent.type(screen.getByPlaceholderText("Judul"), "Thread Title");
    await userEvent.type(screen.getByPlaceholderText("Kategori"), "General");
    await userEvent.type(
      screen.getByPlaceholderText("apa yang mau kamu diskusikan ?"),
      "Thread Body"
    );

    await userEvent.click(screen.getByRole("button", { name: "Kirim" }));

    expect(addThreadMock).toHaveBeenCalledWith({
      title: "Thread Title",
      body: "Thread Body",
      category: "General",
    });
  });
});
