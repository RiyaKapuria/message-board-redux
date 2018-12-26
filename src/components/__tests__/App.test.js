import React from "react";
import { mount } from "enzyme";
import PublicForm from "../publicBoard/PublicForm";
import App from "../App";
import Root from "../../Root";

it("should render a public form", () => {
  let wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  expect(wrapper.find(PublicForm).length).toEqual(1);
});
