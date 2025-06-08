import Head from 'next/head';
import Link from 'next/link';

export default function Home({ hero }) {
  return (
    <div>
      <Head>
        <title>{hero.title}</title>
        <meta name="description" content="Casa-VidaOS landing page" />
      </Head>
      <h1>{hero.title}</h1>
      <p>{hero.tagline}</p>
      <p>
        <Link href="/posts">Read our latest posts</Link>
      </p>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${req.headers.host}`;
  const res = await fetch(`${baseUrl}/api/hero`);
  const hero = await res.json();
  return { props: { hero } };
}
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
      <main>
        <h1>Welcome to Casa-VidaOS</h1>
        <p>The operating system for a better living.</p>
      </main>
    </div>
  );
}
