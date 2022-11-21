/**
 * JEST
 */

// describe("true is truthy and false is falsy", () => {
//   test("true is truthy", () => {
//     const variable = 1;
//     expect(1 === variable).toBe(true);
//   });

//   test("false is falsy", () => {
//     expect(1 === 2).toBe(false);
//   });
// });

/**
 * REACT TESTING LIBRARY
 */
import { render, screen } from "@testing-library/react";
import App from "./App";
import { CustomAvatar, CustomTooltip } from "./components";

test("renders the App component", () => {
  render(<CustomTooltip label={"tooltip"}>{"hello"}</CustomTooltip>);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
