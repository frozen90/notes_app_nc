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
      folder {
        id
        title
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      folder {
        id
        title
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
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
      folder {
        id
        title
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owner
    }
  }
`;
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder {
    onCreateFolder {
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
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder {
    onUpdateFolder {
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
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder {
    onDeleteFolder {
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
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
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
