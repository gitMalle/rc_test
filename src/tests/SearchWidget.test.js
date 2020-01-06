import React from "react";
import { render, fireEvent, screen, wait } from "@testing-library/react";
import { SearchWidget } from "../components/SearchWidget";

test("no results are shown when entering one character", async () => {
  render(<SearchWidget />);

  // search for X
  fireEvent.change(screen.getByPlaceholderText(/city/i), {
    target: { value: "X" }
  });

  // check if results node is null
  await wait(() => expect(screen.queryByTestId("results")).toBeNull());
});

test("search box shows results when searching for 'Manchester'", async () => {
  render(<SearchWidget />);

  // search for Manchester
  fireEvent.change(screen.getByPlaceholderText(/city/i), {
    target: { value: "Manchester" }
  });

  // waits for api call and checks if results are shown
  await wait(() => screen.getByTestId("results"));
  expect(screen.getByTestId("results")).toBeInTheDocument();
});

test("search box shows 'No results found' when searching for 'xxxxxxx'", async () => {
  render(<SearchWidget />);

  // search for Manchester
  fireEvent.change(screen.getByPlaceholderText(/city/i), {
    target: { value: "xxxxxxx" }
  });

  // waits for api call and checks if correct result is shown
  await wait(() => screen.getByTestId("results"));
  expect(screen.getByTestId("results")).toBeInTheDocument();
  expect(screen.getByText(/No results found/i)).toBeInTheDocument();
});
