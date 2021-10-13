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
      folderID
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
        folderID
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      title
      type
      createdAt
      notes {
        items {
          id
          type
          title
          content
          password
          locked
          createdAt
          folderID
          updatedAt
          owner
        }
        nextToken
      }
      updatedAt
      owner
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        createdAt
        notes {
          nextToken
        }
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
      link
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
        link
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
export const getPlannedDates = /* GraphQL */ `
  query GetPlannedDates($id: ID!) {
    getPlannedDates(id: $id) {
      id
      date
      events {
        items {
          id
          date
          type
          title
          content
          plannedDateId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlannedDates = /* GraphQL */ `
  query ListPlannedDates(
    $filter: ModelPlannedDatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlannedDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        events {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      date
      type
      title
      content
      plannedDateId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        type
        title
        content
        plannedDateId
        createdAt
        updatedAt
        owner
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
        folderID
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const foldersByDate = /* GraphQL */ `
  query FoldersByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foldersByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        type
        createdAt
        notes {
          nextToken
        }
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const notesByLink = /* GraphQL */ `
  query NotesByLink(
    $link: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSharedNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByLink(
      link: $link
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        link
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
export const eventsByDate = /* GraphQL */ `
  query EventsByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        type
        title
        content
        plannedDateId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
