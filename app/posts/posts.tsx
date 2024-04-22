"use client";

import {useQuery} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";
import {PostType} from "@/types/types";
import PostCard from "@/components/cards/post-card";
// import {getUserNameById} from "@/queries/user-queries";

export default function Posts() {
  const {data} = useQuery({queryKey: ["posts"], queryFn: getPosts});

  // const {data: userName} = useQuery({queryKey: ["user", data], queryFn: getUserNameById(data)});

  return (
    <div className="space-y-4 px-10 md:px-20 xl:px-40 my-20">
      {data?.map((post: PostType) => <PostCard {...post} key={post.id} />)}
    </div>
  );
}
