import { useState, useEffect } from "react";

type Post = {
  slug: string;
  title: string;
  description?: string;
};

export default function Loaddata() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/posts.json")
      .then((r) => r.json())
      .then((data: Post[]) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  );
}
