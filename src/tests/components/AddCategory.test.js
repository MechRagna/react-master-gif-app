import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Probar AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Tiene que matchear con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const event = { target: { value: "One Punch" } };
    input.simulate("change", event);
  });

  test("NO debe postear el handleSubmit", () => {
    const event = { preventDefault() {} };
    wrapper.find("form").simulate("submit", event);
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe llamar al setCategories y limpiar la caja de texto ", () => {
    const eventChg = { target: { value: "One Punch" } };
    const input = wrapper.find("input");
    input.simulate("change", eventChg);
    const eventSubmit = { preventDefault() {} };
    wrapper.find("form").simulate("submit", eventSubmit);
    expect(setCategories).toHaveBeenCalled();
    expect(input.props().value).toBe("");
  });
});
