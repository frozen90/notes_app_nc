/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
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
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
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
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
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
        owner
      }
      updatedAt
      owner
    }
  }
`;
export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const createSharedNote = /* GraphQL */ `
  mutation CreateSharedNote(
    $input: CreateSharedNoteInput!
    $condition: ModelSharedNoteConditionInput
  ) {
    createSharedNote(input: $input, condition: $condition) {
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
export const updateSharedNote = /* GraphQL */ `
  mutation UpdateSharedNote(
    $input: UpdateSharedNoteInput!
    $condition: ModelSharedNoteConditionInput
  ) {
    updateSharedNote(input: $input, condition: $condition) {
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
export const deleteSharedNote = /* GraphQL */ `
  mutation DeleteSharedNote(
    $input: DeleteSharedNoteInput!
    $condition: ModelSharedNoteConditionInput
  ) {
    deleteSharedNote(input: $input, condition: $condition) {
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
export const createPlannedDates = /* GraphQL */ `
  mutation CreatePlannedDates(
    $input: CreatePlannedDatesInput!
    $condition: ModelPlannedDatesConditionInput
  ) {
    createPlannedDates(input: $input, condition: $condition) {
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
export const updatePlannedDates = /* GraphQL */ `
  mutation UpdatePlannedDates(
    $input: UpdatePlannedDatesInput!
    $condition: ModelPlannedDatesConditionInput
  ) {
    updatePlannedDates(input: $input, condition: $condition) {
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
export const deletePlannedDates = /* GraphQL */ `
  mutation DeletePlannedDates(
    $input: DeletePlannedDatesInput!
    $condition: ModelPlannedDatesConditionInput
  ) {
    deletePlannedDates(input: $input, condition: $condition) {
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
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
