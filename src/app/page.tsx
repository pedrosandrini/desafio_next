import Link from 'next/link';
import BlogLayout from '../components/BlogLayout';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <BlogLayout>
      <div className="my-10">
        <h2 className="text-3xl font-semibold mb-5">Latest Posts</h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Link href={`/posts/${post.id}`} className="text-2xl font-bold text-blue-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogLayout>
  );
}
