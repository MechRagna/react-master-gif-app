import React from "react";
import { shallow } from "enzyme";
import { getGifs } from "../../services/getGifs";
import "@testing-library/jest-dom";

describe("Tests con getGifs", () => {
  test("debe traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBe(10);
  });

  test("No se envía palabra para buscar", async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
