jest.dontMock("../search");
jest.mock("../client");

import { findByTitle, RequestByTitleParams} from "../search";

describe("fintByTitle", () => {
  const params: RequestByTitleParams = {
    title: "title",
    includeTomatoesRating: false,
  };

  it("pass on the params", () => {
    findByTitle(params);
    expect(false).toBeTruthy();
  });

  it("should throw an error if title is empty", () => {
    findByTitle(params);
    expect(false).toBeTruthy();
  });

  it("should ignore invalid params", () => {
    findByTitle(params);
  });

  it("should not pass empty values", () => {
    findByTitle(params);
  });
});
