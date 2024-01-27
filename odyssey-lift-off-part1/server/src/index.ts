import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./schema"
import { addMocksToSchema } from "@graphql-tools/mock"
import { makeExecutableSchema } from "@graphql-tools/schema"

const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => "track_01",
        title: () => "Astro Kitty, Space Explorer",
        author: () => ({
            name: "Grumpy Cat",
            photo:
            "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
        }),
        thumbnail: () =>
            "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
        length: () => 1210,
        modulesCount: () => 6,
    }),
}

const mockedSchema = addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
    mocks,
})

async function startApolloServer() {
    const server = new ApolloServer({ schema: mockedSchema })
    const { url } = await startStandaloneServer(server)

    console.log(`\nServer is running!\nQuery at ${url}\n`)
}

startApolloServer()
