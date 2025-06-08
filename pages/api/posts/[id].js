import { getPost } from '../../../lib/posts';

export default function handler(req, res) {
  const { id } = req.query;
  const post = getPost(id);
  if (post) res.status(200).json(post);
  else res.status(404).json({ message: 'Not found' });
}
