import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';

// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';

import { Layout } from '../Layout/Layout';
import Home from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';
import Loader from 'components/Loader/Loader';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.loaderContainer}>
      <Loader />
    </div>
  ) : (
    <div className={css.mainContainer}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

// <div className={css.mainContainer}>
//   <h1 className={css.title}>Phonebook</h1>

//   <ContactForm />

//   <h2 className={css.title}>Contacts</h2>

//   <Filter />

//   <ContactList />
// </div>

// export default App;
