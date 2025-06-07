import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Casa-VidaOS</title>
        <meta name="description" content="Casa-VidaOS landing page" />
      </Head>
      <h1>Welcome to Casa-VidaOS</h1>
      <p>The operating system for a better living.</p>
      <p>
        <Link href="/posts">Read our latest posts</Link>
      </p>
    </div>
  );
}
