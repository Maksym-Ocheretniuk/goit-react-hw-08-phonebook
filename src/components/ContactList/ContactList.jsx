import { useSelector } from 'react-redux';

import {
  // selectContacts,
  // selectFilteredContacts,
  // selectError,
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/filter/selectors';
// import Loader from '../Loader/Loader';
import css from './ContactList.module.css';

export function ContactList() {
  const count = useSelector(selectContactsCount);
  const filteredContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.listContainer}>
      {!count && isLoading && !error ? (
        <p>Add your first contact.</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
}

// export default ContactList;
