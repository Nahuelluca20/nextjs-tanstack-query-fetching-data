"use client";

import {useQuery} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";

export default function Posts() {
  const {data} = useQuery({queryKey: ["posts"], queryFn: getPosts});

  return <div>hello </div>;
}
