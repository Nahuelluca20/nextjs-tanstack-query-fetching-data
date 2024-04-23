"use client";

import {useQuery} from "@tanstack/react-query";

import PostCard from "@/components/cards/post-card";
import {PostType} from "@/types/types";

export default function PostClient() {
  const {data} = useQuery({
    queryKey: ["posts-client"],
    queryFn: () =>
      fetch("https://dummyjson.com/posts")
        .then((response) => response.json())
        .then((data) => data.posts),
  });

  return (
    <div className="space-y-4 px-10 md:px-20 xl:px-40 my-20">
      <h1 className="text-2xl font-bold">Post Client Side</h1>
      {data?.map((post: PostType) => <PostCard {...post} key={post.id} />)}
    </div>
  );
}
