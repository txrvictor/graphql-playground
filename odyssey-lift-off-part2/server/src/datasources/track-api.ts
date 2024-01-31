import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
  // make sure the URL ends with a "/" so helper classes can
  // append new paths without errors
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome(): Promise<Array<TrackModel>> {
    return this.get<Array<TrackModel>>('tracks');
  }

  getAuthor(authorId: string): Promise<AuthorModel> {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
