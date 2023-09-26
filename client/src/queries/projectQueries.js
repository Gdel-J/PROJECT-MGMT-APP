import { gql } from "@ApolloClient";

const GET_PROJECTS = gql `
query getProjects {
    projects { 
        id
        name
        status
    }
}
`
export  { GET_PROJECTS };