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
  contentType?: TypeOfContent;
  year?: string;
  page?: number;
  plot?: string;
  includeTomatoesRating?: boolean;
}

export const findById = (imdbId: string, searchParams?: RequestParams): Promise<SearchResult>  => {
  const params = Object.assign({
    imdbId,
  }, searchParams);
  return get(params);
};

export const findByTitle = (title: string, searchParams: RequestParams = {}): Promise<SearchResult> => {
  const params = Object.assign({
    title,
  }, searchParams );
  return get(params);
};

export const search = (query: string, searchParams?: RequestParams): Promise<ApiResult> => {
  const params = Object.assign({
    search: query,
  }, searchParams);
  return get(params);
};
