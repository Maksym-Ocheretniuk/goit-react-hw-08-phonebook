import { useSelector } from 'react-redux';

import {
  selectContactsCount,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectVisibleContacts } from 'redux/filter/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const count = useSelector(selectContactsCount);
  const filteredContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.listContainer}>
      {!count && isLoading && !error ? (
        <p className={css.message}>Add your first contact.</p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      )}
    </ul>
  );
};
