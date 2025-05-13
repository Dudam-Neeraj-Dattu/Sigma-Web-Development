import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const getInitialPasswords = () => {
  const localData = localStorage.getItem("passwords");
  return localData ? JSON.parse(localData) : [];
};

const updateLocalStorage = (passwords) => {
   localStorage.setItem("passwords", JSON.stringify(passwords));
};

const initialState = {
   passwords: getInitialPasswords(),      // Stores all password objects
   editId: null,       // ID of password being edited
   form: {             // Current values in form
      site: "",
      username: "",
      password: ""
   }
};

const passwordSlice = createSlice({
   name: 'passwords',
   initialState,
   reducers: {

      setForm: (state, action) => {
         state.form = action.payload;
      },

      // clearForm: (state) => {
      //    state.form = {
      //       site: "",
      //       username: "",
      //       password: ""
      //    };
      //    state.editId = null;
      // },

      startEdit(state, action) {
         // console.log("Edit action payload:", action.payload);
         const pw = state.passwords.find(p => p.id === action.payload);
         if (pw) {
            state.form = { site: pw.site, username: pw.username, password: pw.password };
            state.editId = pw.id;
         }
      },

      savePassword: (state) => {
         const { site, username, password } = state.form;
         if (state.editId) {
            const index = state.passwords.findIndex(password => password.id === state.editId);
            if (index !== -1) {
               state.passwords[index] = { id: state.editId, site, username, password };
            }
         } else {
            const newPassword = { id: uuidv4(), site, username, password };
            state.passwords.push(newPassword);
            // console.log(state.passwords);
         }
         state.form = {
            site: "",
            username: "",
            password: ""
         };
         state.editId = null;
         updateLocalStorage(state.passwords);
      },

      deletePassword(state, action) {
         state.passwords = state.passwords.filter(p => p.id !== action.payload);
         updateLocalStorage(state.passwords);
      }
   },
});

export const { setForm, startEdit, savePassword, deletePassword } = passwordSlice.actions;
export default passwordSlice.reducer;
