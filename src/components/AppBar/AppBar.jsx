import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  return (
    <header>
      <h1>AppBar</h1>
      <Navigation />
      <AuthNav />
    </header>
  );
};
