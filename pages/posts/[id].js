import Head from 'next/head';

import { posts, getPost } from '../../lib/posts';

export default function Post({ post }) {
  if (!post) return <p>Post not found</p>;
  return (
    <div>
      <Head>
        <title>{post.title} - Casa-VidaOS</title>
      </Head>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getServerSideProps({ params, req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${req.headers.host}`;
  const res = await fetch(`${baseUrl}/api/posts/${params.id}`);
  if (!res.ok) {
    return { notFound: true };
  }
  const post = await res.json();
  return { props: { post } };
export async function getStaticPaths() {
  return {
    paths: posts.map(p => ({ params: { id: p.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { post: getPost(params.id) } };
}
