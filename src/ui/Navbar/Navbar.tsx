import Link from 'next/link';

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link
        className={`button ${styles['navigation-link']}`}
        href={'/'}>
        Home
      </Link>
      <Link
        className={`button ${styles['navigation-link']}`}
        href={'/employee'}>
        employees
      </Link>
    </nav>
  );
}
