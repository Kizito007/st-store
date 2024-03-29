import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const categoryReducer = createReducer(initialState, {
  categoryCreateRequest: (state) => {
    state.isLoading = true;
  },
  categoryCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.category = action.payload;
    state.success = true;
  },
  categoryCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // delete category 
  deleteCategoryRequest: (state) => {
    state.isLoading = true;
  },
  deleteCategorySuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteCategoryFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all categories
  getAllCategoriesRequest: (state) => {
    state.isLoading = true;
  },
  getAllCategoriesSuccess: (state, action) => {
    state.isLoading = false;
    state.allCategorys = action.payload;
  },
  getAllCategoriesFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
