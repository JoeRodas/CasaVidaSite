import { posts } from '../../lib/posts';

export default function handler(req, res) {
  res.status(200).json(posts);
}
