import { hero } from '../../lib/hero';

export default function handler(req, res) {
  res.status(200).json(hero);
}
