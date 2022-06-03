import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UserPage from "../src/modules/User/pages/UserPage.vue";

describe("UserPage.vue", () => {
  it("should render", () => {
    const wrapper = mount(UserPage);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("Username");
  });
});
