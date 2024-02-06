import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a specific track by ID
    track: (parent, args, contextValue, info) => {
      const {dataSources} = contextValue
      const {id} = args

      return dataSources.trackAPI.getTrack(id);
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: (parent, args, contextValue, info) => {
      // comes from the resolver chain (it's the parents, Track, ID)
      const {id} = parent
      const {dataSources} = contextValue

      return dataSources.trackAPI.getTrackModules(id)
    },
  },
};
