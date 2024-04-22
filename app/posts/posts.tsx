"use client";

import {useQuery} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";
import {PostType} from "@/types/types";

import Post from "../../components/post";

export default function Posts() {
  const {data} = useQuery({queryKey: ["posts"], queryFn: getPosts});

  console.log(data);

  return (
    <div>
      hello
      {data?.map((post: PostType) => <Post {...post} key={post.id} />)}
    </div>
  );
}
