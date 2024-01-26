import gql from "graphql-tag"

export const typeDefs = gql`
    type Query {
        "Query to get tracks array"
        tracksForHome: [Track!]!
    }

    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        "track's title"
        title: String!
        "track's author"
        author: Author!
        "track's illustration to be displayed"
        thumbnail: String
        "track's length in minutes"
        length: Int
        "number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track"
    type Author {
        id: ID!
        "First and last name"
        name: String!
        "Author's profile photo url"
        photo: String
    }
`
