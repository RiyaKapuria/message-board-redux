import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";
import Root from "../../../Root";
import PublicForm from "../../publicBoard/PublicForm";

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <PublicForm />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("textarea on Change", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "Type something" }
    });
    wrapper.update();
  });

  it("should change value when user is typing in the text area", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("Type something");
  });

  it("should empty text area on submit", () => {
    wrapper.find("button.btn-primary").simulate("click");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toBe("");
  });
});

it("should render a text area", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});

it("should render a blue button", () => {
  expect(wrapper.find("button.btn-primary").length).toEqual(1);
});

it("should check snapshot for PublicForm", () => {
  wrapper = renderer.create(
    <Root>
      <PublicForm />
    </Root>
  );
  expect(wrapper.toJSON()).toMatchSnapshot();
});
