import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.bgImage}></div>
      <h1 className={css.title}>Phonebook</h1>
    </div>
  );
}
