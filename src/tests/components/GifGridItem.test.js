import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
import "@testing-library/jest-dom";

describe("Validaciones de GifGridItem", () => {
  const title = "Titulo de prueba";
  const url = "http://localhost/test.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Validar que se vea bien el componente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Validar el parrafo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Validar la URL de la img", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
  });

  test("Validar el ALT de la img", () => {
    const img = wrapper.find("img");
    expect(img.props().alt).toBe(title);
  });
  
  // animate__backInUp
  test("Validar las class del div", () => {
    const div = wrapper.find("div");
    // console.log("div.hasClass(): ", div.hasClass("animate__backInUp"));
    expect(div.hasClass("animate__backInUp")).toBe(true);
  });

});
