/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($owner: String!) {
    onCreateNotes(owner: $owner) {
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
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($owner: String!) {
    onUpdateNotes(owner: $owner) {
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
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($owner: String!) {
    onDeleteNotes(owner: $owner) {
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
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder($owner: String!) {
    onCreateFolder(owner: $owner) {
      id
      title
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder($owner: String!) {
    onUpdateFolder(owner: $owner) {
      id
      title
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder($owner: String!) {
    onDeleteFolder(owner: $owner) {
      id
      title
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSharedNote = /* GraphQL */ `
  subscription OnCreateSharedNote {
    onCreateSharedNote {
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
export const onUpdateSharedNote = /* GraphQL */ `
  subscription OnUpdateSharedNote {
    onUpdateSharedNote {
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
export const onDeleteSharedNote = /* GraphQL */ `
  subscription OnDeleteSharedNote {
    onDeleteSharedNote {
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
export const onCreatePlannedDates = /* GraphQL */ `
  subscription OnCreatePlannedDates($owner: String!) {
    onCreatePlannedDates(owner: $owner) {
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
export const onUpdatePlannedDates = /* GraphQL */ `
  subscription OnUpdatePlannedDates($owner: String!) {
    onUpdatePlannedDates(owner: $owner) {
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
export const onDeletePlannedDates = /* GraphQL */ `
  subscription OnDeletePlannedDates($owner: String!) {
    onDeletePlannedDates(owner: $owner) {
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
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents($owner: String!) {
    onCreateEvents(owner: $owner) {
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents($owner: String!) {
    onUpdateEvents(owner: $owner) {
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents($owner: String!) {
    onDeleteEvents(owner: $owner) {
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
