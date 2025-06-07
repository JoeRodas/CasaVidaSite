export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log('Contact form submission:', { name, email, message });
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
