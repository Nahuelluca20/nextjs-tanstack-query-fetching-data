import {useQuery} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";

import PostClient from "./posts-client";

export default function Page() {
  return <PostClient />;
}
