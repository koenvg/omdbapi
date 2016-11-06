import { settings } from "./config/config";
import * as Promise  from "es6-promise";
import "whatwg-fetch";

export type TypeOfContent = "movie" | "series" | "episode";

export interface SearchResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: TypeOfContent;
  Poster: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Metascrore?: string;
  imdbRating?: string;
  imdbVotes?: string;
}

export interface ApiResult {
  Search: SearchResult[];
  totalResults: string;
  Response: string;
}

export const searchById = (imdbId: string): Promise<SearchResult> => {
  let url = `${settings.url}?i=${imdbId}`;
  url += "&r=json";
  return fetch(url)
    .then((res) => {
        return res.json();
    });
};

export const searchByName = (): Promise<SearchResult> => {
  // TODO: searchByName
  return null;
};

export const search = (): Promise<ApiResult> => {
 // TODO: search functionality
 return null;
};
