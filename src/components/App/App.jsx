import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';

// import css from './App.module.css';

import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>

    // <div className={css.mainContainer}>
    //   <h1 className={css.title}>Phonebook</h1>

    //   <ContactForm />

    //   <h2 className={css.title}>Contacts</h2>

    //   <Filter />

    //   <ContactList />
    // </div>
  );
};

// export default App;
