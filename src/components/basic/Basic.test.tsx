import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

import { Provider } from "react-redux";
import store from "../../store";
import Basic from "./Basic";
import { ImportsNotUsedAsValues } from "typescript";

describe("basic module", () => {
  let component:RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Basic />
      </Provider>
    )
  });
  //   test("renders content", () => {
  //     const component = render(
  //       <Provider store={store}>
  //         <Basic />
  //       </Provider>
  //     );

  //     // component.debug();
  //     const button = component.container.querySelector(
  //       "button"
  //     ) as HTMLButtonElement;
  //     console.log(prettyDOM(button));
  //   });

  // test("clicking the button and calls the event handler once", () => {
  //   const mockHandler = jest.fn();

  //   const component = render(
  //     <Provider store={store}>
  //       <Basic />
  //     </Provider>
  //   );

  //   const button = component.getByText("Add");

  //   console.log(prettyDOM(button));

  //   button.addEventListener('click',mockHandler)

  //   fireEvent.click(button);

  //   expect(mockHandler.mock.calls).toHaveLength(1);
  // });

  test("if a <P> is rendered after clicking Add button with question input", () => {
    const Pbefore = component.container.querySelectorAll("p");

    expect(Pbefore).toHaveLength(2);

    const input = component.container.querySelector(
      "input"
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "Test Question",
      },
    });

    const addButtonBefore = component.getByText("Add");

    fireEvent.click(addButtonBefore);

    const Pafter = component.container.querySelectorAll("p");

    expect(Pafter).toHaveLength(3);

    const targetP = component.getByText("Test Question");

    const Buttons = component.container.querySelectorAll("button");

    expect(targetP).toBeTruthy();
    expect(Pafter[1]).toHaveTextContent("Test Question");
    expect(Buttons).toHaveLength(1);
  });


  test('',()=>{

  })
});
