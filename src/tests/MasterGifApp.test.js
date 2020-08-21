import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { MasterGifApp } from "../MasterGifApp";

describe("Tests en <MasterGidApp />", () => {
  test("Debe matchear con el snapshot", () => {
    const wrapper = shallow(<MasterGifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar la lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<MasterGifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
