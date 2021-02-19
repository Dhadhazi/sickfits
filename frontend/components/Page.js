import { Header } from './Header';

export const Page = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
