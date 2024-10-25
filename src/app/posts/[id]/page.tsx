import Link from 'next/link';
import BlogLayout from '../../../components/BlogLayout';

async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch post with id: ${id}`);
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null; // Retorna null se houver erro
  }
}

export default async function PostDetails({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <BlogLayout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <p className="text-gray-600">The post you are looking for does not exist.</p>
          <Link href="/" className="text-blue-600 hover:underline mt-5 inline-block">
            ← Back to posts
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <article className="bg-white p-8 rounded-lg shadow my-10">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
        <Link href="/" className="text-blue-600 hover:underline mt-5 inline-block">
          ← Back to posts
        </Link>
      </article>
    </BlogLayout>
  );
}
