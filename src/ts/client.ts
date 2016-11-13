import { settings } from "./config/config";
import * as Promise  from "es6-promise";
import "whatwg-fetch";

const paramsMap = {
  search: "s",
  title: "t",
  imdbId: "i",
  year: "y",
  page: "page",
  season: "Season",
  episode: "Episode",
  plot: "plot",
  type: "type",
  tomatoes: "tomatoes",
};

const createUrlFromParams = (params: any): string => {
  const keys = Object.keys(params);
  let url = `${settings.url}?r=json`;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const convertedKey = paramsMap[key];
    if (!convertedKey) {
      throw Error(`Invalid key ${key}`);
    }
    url += `&${convertedKey}=${params[key]}`;
  }
  return url;
};

export const get = (params: any): Promise<any> => {
  const url = createUrlFromParams(params);
  return fetch(url)
    .then((res) => {
      return res.json();
    }).then((searchResult: any) => {
      if (searchResult.Response === "False") {
        throw Error(searchResult.Error);
      }
      return searchResult;
    });
};
