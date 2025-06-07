import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(form)),
    });
    if (res.ok) setStatus('Message sent!');
    else setStatus('Error sending message');
  }

  return (
    <div>
      <Head>
        <title>Contact - Casa-VidaOS</title>
      </Head>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: <input name="name" required /></label><br />
        <label>Email: <input name="email" type="email" required /></label><br />
        <label>Message:<br /><textarea name="message" required /></label><br />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
