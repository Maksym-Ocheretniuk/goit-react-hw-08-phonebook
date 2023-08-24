import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
