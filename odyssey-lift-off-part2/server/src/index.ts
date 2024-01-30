import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { TrackAPI } from "./datasources/track-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    // note the "async"
    context: async () => {
      // to enable caching to the RESTDataSource class:
      const {cache} = server;

      // this object becomes our resolver's "contextValue" argument
      return {
        // enable "dataSources.trackAPI" in our contextValue
        dataSources: {
          trackAPI: new TrackAPI({cache}),
        },
      };
    },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
