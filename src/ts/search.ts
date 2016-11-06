import * as Promise  from "es6-promise";
import { get } from "./client";

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

export interface RequestParams {
  type?: TypeOfContent;
  year?: string;
}

export interface RequestByIdParams extends RequestParams {
  imdbId: string;
  plot?: string;
  includeTomatoesRating?: boolean;
}

export interface RequestByTitleParams extends RequestParams {
  title: string;
  plot?: string;
  includeTomatoesRating?: boolean;
}

export interface SearchParams extends RequestParams {
  search: string;
  page?: number;
}

export const searchById = (searchParams: RequestByIdParams): Promise<SearchResult>  => {
  return get(searchParams);
};

export const searchByName = (searchParams: RequestByTitleParams): Promise<SearchResult> => {
  return get(searchParams);
};

export const search = (searchParams: SearchParams): Promise<ApiResult> => {
  return get(searchParams);
};
