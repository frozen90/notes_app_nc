/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($owner: String!) {
    onCreateNotes(owner: $owner) {
      id
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
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($owner: String!) {
    onUpdateNotes(owner: $owner) {
      id
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
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($owner: String!) {
    onDeleteNotes(owner: $owner) {
      id
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
export const onCreateSharedNote = /* GraphQL */ `
  subscription OnCreateSharedNote {
    onCreateSharedNote {
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
export const onUpdateSharedNote = /* GraphQL */ `
  subscription OnUpdateSharedNote {
    onUpdateSharedNote {
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
export const onDeleteSharedNote = /* GraphQL */ `
  subscription OnDeleteSharedNote {
    onDeleteSharedNote {
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
