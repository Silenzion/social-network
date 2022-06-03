//@ts-ignore
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import MainPage from "../src/modules/Main/pages/MainPage.vue";

describe("MainPage.vue", () => {
  it("should render", () => {
    const wrapper = mount(MainPage);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("Main page");
    // expect(wrapper.findAll("img")).toHaveLength(1);
  });
});
