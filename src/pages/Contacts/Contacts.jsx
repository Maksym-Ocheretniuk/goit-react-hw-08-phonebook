import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';
// import { Loader } from '../../components/Loader/Loader';

import css from './Contacts.module.css';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectContactsCount);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <p className={css.total}>
        Total contacts in phonebook:
        <span className={css.totalNumber}> {count}</span>
      </p>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && <p className={css.errorMessage}>An error occurred: {error}</p>}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
}
