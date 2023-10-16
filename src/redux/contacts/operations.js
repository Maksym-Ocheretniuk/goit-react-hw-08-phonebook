import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// thunk GET - отримання списку контактів з бекенду
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// thunk POST - додавання нового контакту
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (contact, thunkAPI) {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// thunk DELETE - видалення контакту
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (contactId, thunkAPI) {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
