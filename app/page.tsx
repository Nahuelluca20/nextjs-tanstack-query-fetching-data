import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 text-xl font-semibold">
      <Link href={"/posts"}>Go to posts server side</Link>
      <Link href={"/posts-prefetch"}>Go to Prefetch posts</Link>
      <Link href={"/posts-client"}>Go to posts client side</Link>
    </main>
  );
}
