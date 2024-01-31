import { Resolvers } from './types';

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks
    tracksForHome: (parent, args, contextValue, info) => {
      console.log("Query-tracksForHome", {parent, args, contextValue, info});

      const {dataSources} = contextValue;
      return dataSources.trackAPI.getTracksForHome();
    },
  },
  // will be used when "parent" tracksForHome is called and tries to
  // populate "Track->author" field
  Track: {
    author: (parent, args, contextValue, info) => {
      console.log("Track-author", {parent, args, contextValue, info});

      const {dataSources} = contextValue;
      const {authorId} = parent;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
