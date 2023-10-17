import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import css from './Register.module.css';

export const Register = () => {
  return (
    <>
      <h1 className={css.title}>Registration</h1>
      {<RegisterForm />}
    </>
  );
};
