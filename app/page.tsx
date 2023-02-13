import Link from "next/link";
import FormPost from "./Form";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPosts();
  console.log(data);
  return (
    <main className="px-48 py-4">
      <Link
        className="px-4 py-2 font-medium text-black bg-teal-500 rounded-md"
        href={"/dashboard"}
      >
        Go to the dashboard
      </Link>
      <FormPost />
      {data.map((post) => (
        <h1 className="py-6 text-lg">{post.title}</h1>
      ))}
    </main>
  );
}
