//@ts-ignore
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NotFound from "@/components/NotFound.vue";

describe("404.vue", () => {
  it("should render", () => {
    const wrapper = mount(NotFound);
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.text()).toContain("404");
    expect(wrapper.findAll("img")).toHaveLength(1);
  });
});
