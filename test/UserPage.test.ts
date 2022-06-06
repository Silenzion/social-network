import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UserPage from "../src/modules/User/pages/UserPage.vue";

describe("UserPage.vue", () => {
  it("should render", () => {
    const wrapper = mount(UserPage, {
      props: {
        id: 1,
      },
    });
    expect(wrapper.props().id).not.toEqual(null);
    expect(wrapper.text()).toContain("Username");
    expect(wrapper.findAll("img.el-avatar")).toHaveLength(1);
  });
});
