import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to FullStack Assessment</h1>
        <Link
          href='/employee'
          className={styles.buttonLink}>
          Go to employee
        </Link>
      </main>
      <footer className={styles.footer}>@MauricioGarcia-2024</footer>
    </div>
  );
}
