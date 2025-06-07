export const posts = [
  {
    id: 'welcome',
    title: 'Welcome to Casa-VidaOS',
    content: 'Discover how Casa-VidaOS can improve your daily life.'
  },
  {
    id: 'features',
    title: 'Amazing Features',
    content: 'Learn about the amazing features of our platform.'
  }
];

export function getPost(id) {
  return posts.find(p => p.id === id);
}
