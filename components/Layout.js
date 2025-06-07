import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
