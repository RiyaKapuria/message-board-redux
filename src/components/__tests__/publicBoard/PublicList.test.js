import React from "react";
import { mount } from "enzyme";
import Root from "../../../Root";
import PublicList from "../../publicBoard/PublicList";

let wrapper;
const hardCoded = {
  posts: [{ id: 1, title: "RiyaTest" }, { id: 2, title: "KapuriaTest" }]
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={hardCoded}>
      <PublicList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("should render 2 initialData divs", () => {
  expect(wrapper.find("div#initialData").length).toBe(2);
});

it("should render the correct text inside", () => {
  expect(wrapper.render().text()).toContain("RiyaTest");
  expect(wrapper.render().text()).toContain("KapuriaTest");
});
