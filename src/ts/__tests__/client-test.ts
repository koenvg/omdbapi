jest.dontMock("../client");
jest.dontMock("fetch-mock");
jest.dontMock("whatwg-fetch");

import { get } from "../client";
import * as fetchMock from "fetch-mock";
import "whatwg-fetch";

describe("client", () => {
  let params = {
    search: null,
  };

  beforeEach(() => {
    fetchMock.get("*", {});
    params = {
      search: "game of thrones",
    };
  });

  it("should map the keys to the correct url props", () => {
    get(params);
    expect(fetchMock.lastUrl()).toContain(`s=game of thrones`);
  });

  it("should throw an error when the api's response is false", () => {
    params.search = "errorResponse";
    get(params);
  });
});
