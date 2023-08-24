import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.listContainer}>
      {isLoading && !error ? (
        <div className={css.loaderWrap}>
          <Loader />
        </div>
      ) : contacts.length === 0 && !error ? (
        <p>Add your first contact.</p>
      ) : (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactItem key={id} contact={{ id, name, phone }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;
