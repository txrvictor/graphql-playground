import { CodegenConfig } from "@graphql-codegen/cli";

// we need this config for the "generate" script to work
const config: CodegenConfig = {
    // where to take the schema reference from, in this case the backend
    // will be the schema source of truth
    schema: "http://localhost:4000",
    // which files GraphQL Code Generator should consider when generating 
    // types for our frontend
    documents: ["src/**/*.tsx"],
    // where to output the generated code
    generates: {
        "./src/__generated__/": {
            // use presets from @graphql-codegen/client-preset
            preset: "client",
            // gqlTagName must match the same "tagged template literal"
            // we used on the server. In this case we used "gql" from 
            // the graphql-tag library
            presetConfig: {
                gqlTagName: "gql",
            },
        },
    },
    ignoreNoDocuments: true,
};

export default config;
