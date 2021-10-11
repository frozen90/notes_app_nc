/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
      id
      type
      title
      content
      password
      locked
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        content
        password
        locked
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getSharedNote = /* GraphQL */ `
  query GetSharedNote($id: ID!) {
    getSharedNote(id: $id) {
      id
      title
      content
      expire_date
      password
      createdAt
      updatedAt
    }
  }
`;
export const listSharedNotes = /* GraphQL */ `
  query ListSharedNotes(
    $filter: ModelSharedNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharedNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        expire_date
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notesByDate = /* GraphQL */ `
  query NotesByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        content
        password
        locked
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
