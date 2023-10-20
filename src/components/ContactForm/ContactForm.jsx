import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
// import { nanoid } from '@reduxjs/toolkit';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import css from './ContactForm.module.css';
// import Loader from 'components/Loader/Loader';

const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regexNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = object({
  name: string()
    .matches(regexName, 'Name is not valid')
    .min(2, 'Name too short')
    .max(15, 'Name too long')
    .trim()
    .required('Name is required'),
  number: string()
    .matches(regexNumber, 'Phone number is not valid')
    .min(5, 'Phone number too short')
    .max(15, 'Phone number too long')
    .trim()
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const name = formData.get('name');
  //   const phone = formData.get('phone');

  //   if (contacts.some(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts.`);
  //     return;

  const initialValues = {
    name: '',
    number: '',
  };

  const formSubmitHandler = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      toast.error(`${data.name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name: data.name, number: data.number }));
  };

  //   dispatch(addContact({ id: nanoid(), name, phone }));
  //   e.target.reset();
  // };

  const handleSubmit = (values, { resetForm }) => {
    formSubmitHandler(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.formContainer}>
        <label className={css.formLabel}>
          Name
          <div className={css.inputContainer}>
            <Field
              className={css.formInput}
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </div>
          <ErrorMessage component="div" className={css.errorName} name="name" />
        </label>
        <label className={css.formLabel}>
          Number
          <div className={css.inputContainer}>
            <Field
              className={css.formInput}
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </div>
          <ErrorMessage
            component="div"
            className={css.errorNumber}
            name="number"
          />
        </label>

        <button className={css.formButton} type="submit">
          Add
        </button>
      </Form>
    </Formik>
  );
};

// export default ContactForm;
