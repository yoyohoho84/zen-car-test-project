import { gql } from "@apollo/client";

export const LOAD_WORKS = gql`
  query {
    wizardWorks(where: { parentId: { eq: null } }, order: { orderIndex: asc }) {
      id
      name
      question
      children(order: { orderIndex: asc }) {
        id
        parentId
        name
        question
        other
        vehicleWorks {
          id
          name
          action
          group {
            id
            parentId
            name
            parent {
              id
              name
              parent {
                id
                name
              }
            }
          }
        }
        image {
          file {
            url
            path
          }
        }
        children(order: { orderIndex: asc }) {
          id
          parentId
          name
          question
          other
          vehicleWorks {
            id
            name
            action
            group {
              id
              parentId
              name
              parent {
                id
                name
                parent {
                  id
                  name
                }
              }
            }
          }
          image {
            file {
              url
              path
            }
          }
          children(order: { orderIndex: asc }) {
            id
            parentId
            name
            question
            other
            vehicleWorks {
              id
              name
              action
              group {
                id
                parentId
                name
                parent {
                  id
                  name
                  parent {
                    id
                    name
                  }
                }
              }
            }
            image {
              file {
                url
                path
              }
            }
            orderIndex
            createdAt
            updatedAt
            children(order: { orderIndex: asc }) {
              id
              parentId
              name
              question
              vehicleWorks {
                id
                name
                action
                group {
                  id
                  parentId
                  name
                  parent {
                    id
                    name
                    parent {
                      id
                      name
                    }
                  }
                }
              }
              image {
                file {
                  url
                  path
                }
              }
            }
          }
        }
      }
      image {
        file {
          url
          path
        }
      }
    }
  }
`;
