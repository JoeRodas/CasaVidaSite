import Head from 'next/head';
import Link from 'next/link';

export default function PostsList({ posts }) {
  return (
    <div>
      <Head>
        <title>Posts - Casa-VidaOS</title>
      </Head>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${req.headers.host}`;
  const res = await fetch(`${baseUrl}/api/posts`);
  const posts = await res.json();
  return { props: { posts } };
}
