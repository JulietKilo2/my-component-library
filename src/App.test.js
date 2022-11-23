import { render, screen, fireEvent, toBe } from "@testing-library/react";
import { toBeInTheDocument, toHaveBeenCalled } from "@testing-library/jest-dom";
import { CustomButton, CustomTooltip } from "./components";
import { Add } from "./utils/Add";

/**
 * JEST
 */

// test suite (테스트 묶음)
describe("true is truthy and false is falsy", () => {
  // test case (테스트 케이스)
  // test() or it()
  // both are same
  test("true is truthy", () => {
    // assertions - what you put into the test case
    const variable = "string";
    expect(typeof variable === "string").toBe(true);
  });

  it("math", () => {
    expect(Add(1, 2)).toBe(3);
    expect(Add(2, 3)).toBe(5);
  });
});

/**
 * REACT TESTING LIBRARY
 */

describe("test CustomTooltip", () => {
  test("render custom tooltip", () => {
    const utils = render(
      <CustomTooltip label={"tooltip"}>{"content"}</CustomTooltip>
    );
    // when assigning a render function to a variable, the name should be either "utils" or "view"
    expect(utils.container).toMatchSnapshot();
    // .toMatchSnapshot() creates a snapshot in the directory of __snapshots__ to check if the rendered results are the same after updating the component.
    // after saving the changes, press 'u' in the terminal to update the snapshot.
  });

  test("check if the desired text variables are rendered", () => {
    render(<CustomTooltip label={"tooltip"}>{"content"}</CustomTooltip>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  test("check if the tooltip text shows up", () => {
    render(<CustomTooltip label={"tooltip"}>{"content"}</CustomTooltip>);
    const customToolTip = screen.queryByText("tooltip");
    fireEvent.click(customToolTip, () => {
      expect(screen.getByText("content")).toBeInTheDocument();
    });
  });
});

describe("test CustomButton", () => {
  test("render test button", () => {
    render(<CustomButton>{"button text"}</CustomButton>);
  });

  // test click event
  test("testing on click", () => {
    const newEvent = () => {
      const newParagraph = document.createElement("p");
      const newContent = document.createTextNode("Hello world");
      newParagraph.appendChild(newContent);
      document.body.append(newParagraph);
    };
    render(<CustomButton buttonEvent={newEvent}>{"button text"}</CustomButton>);
    const button = screen.getByRole("button");
    fireEvent.click(button, () => {
      expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
    // expect(screen.getByText("Hello world")).toBeInTheDocument();
    // screen.debug();
  });
});
