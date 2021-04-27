import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";

import { Provider } from "react-redux";
import store from "../../../store";
import RecordForm from "../RecordForm";

describe("RecordForm module", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <RecordForm />
      </Provider>
    );
  });

  test("", () => {});
});
