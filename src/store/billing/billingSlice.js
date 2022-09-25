import { createSlice } from '@reduxjs/toolkit';

export const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    visualizing: false,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
      state.visualizing = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
      state.visualizing = false;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    setVisualizing: (state) => {
      state.visualizing = true;
    },
    updateNote: (state, action) => {
      // payload: note
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });

      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.fileUrls, ...action.payload];
      state.isSaving = false;
    },

    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },

    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setVisualizing,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = billingSlice.actions;
