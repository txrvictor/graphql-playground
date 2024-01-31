import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: [
        /**
         * @graphql-codegen/typescript is the base plugin
         * needed to generate TypeScript types from our schema
         */
        "typescript",
        /**
         * graphql-codegen/typescript-resolvers reviews our schema,
         * consider the types and fields and output the types we
         * need to accurately describe what data our resolver
         * functions use and return
         */
        "typescript-resolvers",
      ],
      config: {
        // points to the context.ts file -> DataSourceContext type
        contextType: "./context#DataSourceContext",
        // map our models.ts to the schema (models.ts -> TrackModel type)
        mappers: {
          Track: "./models#TrackModel",
          Author: "./models#AuthorModel",
        },
      },
    },
  },
};

export default config;
