//@ts-ignore
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NotFound from "@/assets/components/NotFound.vue";

describe("404.vue", () => {
  it("should render", () => {
    const wrapper = mount(NotFound);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
