import { gql } from "graphql-tag";

// const typeDefs = gql`
//   ${""}
// `;

const typeDefs = gql`
  type Query {
    name: String!
  }
`;

export default typeDefs;
