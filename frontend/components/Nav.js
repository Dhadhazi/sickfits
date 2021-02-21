import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export const Nav = () => (
  <NavStyles>
    <Link href="/products">Products</Link>
    <Link href="/sell">sell</Link>
    <Link href="/orders">orders</Link>
    <Link href="/account">account</Link>
  </NavStyles>
);
