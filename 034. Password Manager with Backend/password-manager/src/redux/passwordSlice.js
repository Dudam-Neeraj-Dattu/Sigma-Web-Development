import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { fetchPasswords, createPassword, deletePasswordById, updatePasswordById } from '../api/api';

// Thunks for async actions
export const fetchPasswordsThunk = createAsyncThunk(
   'passwords/fetchPasswords',
   async () => {
      return await fetchPasswords();
   }
);

export const createPasswordThunk = createAsyncThunk(
   'passwords/createPassword',
   async (password) => {
      // console.log(password);

      return await createPassword({ id: uuidv4(), ...password });
   }
);

export const deletePasswordThunk = createAsyncThunk(
   'passwords/deletePassword',
   async (id) => {
      await deletePasswordById(id);
      return id;
   }
);

export const updatePasswordThunk = createAsyncThunk(
   'passwords/updatePassword',
   async ({ id, password }) => {
      return await updatePasswordById(id, password);
   }
);

const initialState = {
   passwords: [],
   editId: null,
   form: {
      site: "",
      username: "",
      password: ""
   },
   loading: false,
   error: null
};

const passwordSlice = createSlice({
   name: 'passwords',
   initialState,
   reducers: {
      setForm: (state, action) => {
         state.form = action.payload;
      },
      startEdit(state, action) {
         const pw = state.passwords.find(p => p.id === action.payload);
         if (pw) {
            state.form = { site: pw.site, username: pw.username, password: pw.password };
            state.editId = pw.id;
         }
      },
      clearForm(state) {
         state.form = { site: "", username: "", password: "" };
         state.editId = null;
      }
   },
   extraReducers: (builder) => {
      builder
         // Fetch
         .addCase(fetchPasswordsThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPasswordsThunk.fulfilled, (state, action) => {
            state.passwords = action.payload;
            state.loading = false;
         })
         .addCase(fetchPasswordsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         })
         // Create
         .addCase(createPasswordThunk.fulfilled, (state, action) => {
            state.passwords.push(action.payload);
            state.form = { site: "", username: "", password: "" };
            state.editId = null;
         })
         // Delete
         .addCase(deletePasswordThunk.fulfilled, (state, action) => {
            state.passwords = state.passwords.filter(p => p.id !== action.payload);
         })
         // Update
         .addCase(updatePasswordThunk.fulfilled, (state, action) => {
            const idx = state.passwords.findIndex(p => p.id === action.payload.id);
            if (idx !== -1) {
               state.passwords[idx] = action.payload;
            }
            state.form = { site: "", username: "", password: "" };
            state.editId = null;
         });
   }
});

export const { setForm, startEdit, clearForm } = passwordSlice.actions;
export default passwordSlice.reducer;