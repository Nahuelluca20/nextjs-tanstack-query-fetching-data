// "use client";

// import {useQuery} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";
import {PostType} from "@/types/types";
import PostCard from "@/components/cards/post-card";

import getQueryClient from "../getQueryClient";
// import {getUserNameById} from "@/queries/user-queries";

export default async function Posts() {
  // const {data} = useQuery({queryKey: ["posts"], queryFn: getPosts});

  const queryClient = getQueryClient();

  // Note we are now using fetchQuery()
  const posts = await queryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <div className="space-y-4 px-10 md:px-20 xl:px-40 my-20">
      <h1 className="text-2xl font-bold">Post Server Side</h1>
      {posts?.map((post: PostType) => <PostCard {...post} key={post.id} />)}
    </div>
  );
}
