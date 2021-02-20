import Link from 'next/link';

export const Nav = () => (
  <nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">sell</Link>
    <Link href="/orders">orders</Link>
    <Link href="/account">account</Link>
  </nav>
);
