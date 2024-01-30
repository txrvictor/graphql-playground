import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  // make sure the URL ends with a "/" so helper classes can
  // append new paths without errors
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }
}
