import { LoginForm } from 'components/LoginForm/LoginForm';

import css from './Login.module.css';

export const Login = () => {
  return (
    <>
      <h1 className={css.title}>Log In</h1>
      <LoginForm />
    </>
  );
};
