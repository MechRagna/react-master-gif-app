import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "One Punch";

  test("Debe matchear con el snapshot", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar data si el useFetchGif devuelve info", () => {
    const gifs = [
      { id: "abc", url: "https://localhost/algo.jpg", title: "algo lindo" },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
