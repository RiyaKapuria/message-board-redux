import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import PublicBoard from "../components/publicBoard/PublicBoard";

beforeEach(() => {
  moxios.install();

  moxios.stubRequest("https://jsonplaceholder.typicode.com/posts", {
    status: 200,
    response: [
      { id: 1, title: "mock ajax call 1" },
      { id: 1, title: "mock ajax call 1" }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("should list mock ajax data", done => {
  let wrapper = mount(
    <Root>
      <PublicBoard />
    </Root>
  );

  wrapper.find("button.btn-success").simulate("click");
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("div#initialData").length).toBe(4);
    done();
    wrapper.unmount();
  });
});
