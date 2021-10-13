import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  categories: [],
  loading: false,
  error: false,
};
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    deleteCategory: (state, action) => {
      console.log("delete category payload", action.payload);
      return state.categories.filter((category) => {
        return category.id !== action.payload.id;
      });
    },
    editCategory: (state, action) => {
      // console.log("edit category", action.payload);
      return state.map((category) => {
        if (category.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
          };
        } else {
          return category;
        }
      });
    },
    // fetch
    fetchCategoriesPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    fetchCategoriesSuccess: (state, action) => {
      console.log(">>>>>>>Fetch Categories Success", action.payload);
      return {
        categories: action.payload.categories,
        loading: false,
        error: false,
      };
    },
    fetchCategoriesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // post: postBookPending, postBookSuccess, postBookFailure
    postCategoryPending: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    postCategorySuccess: (state, action) => {
      console.log(action.payload);
      return {
        loading: false,
        error: false,
        categories: [...state.categories, action.payload.data],
      };
    },
    postCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // delete: deleteBookPending, deleteBookSuccess, deleteBookFailure
    deleteCategoryPending: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteCategorySuccess: (state, action) => {
      console.log(action.payload.id, ">>>>>>>>>>>>>>>>>>>id delete");
      const newArrCategories = state.categories.filter((category) => {
        if (category.id !== action.payload.id) return category;
      });
      return {
        categories: newArrCategories,
        loading: false,
        error: false,
      };
    },
    deleteCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    // update: putBookPending, putBookSuccess, putBookFailure
    putCategoryPending: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    putCategorySuccess: (state, action) => {
      const updateCategory = state.categories.map((category) => {
        if (category.id === action.payload.id) {
          return {
            id: action.payload.id,
            name: action.payload.name,
          };
        } else return category;
      });
      return {
        loading: false,
        error: false,
        categories: updateCategory,
      };
      // console.log(action.payload);
    },
    putCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});
export const { addCategory, deleteCategory, editCategory } =
  categoriesSlice.actions;
export const {
  fetchCategoriesFailure,
  fetchCategoriesPending,
  fetchCategoriesSuccess,
} = categoriesSlice.actions;
export const { postCategoryFailure, postCategoryPending, postCategorySuccess } =
  categoriesSlice.actions;
export const { putCategoryFailure, putCategoryPending, putCategorySuccess } =
  categoriesSlice.actions;
export const {
  deleteCategoryFailure,
  deleteCategoryPending,
  deleteCategorySuccess,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
