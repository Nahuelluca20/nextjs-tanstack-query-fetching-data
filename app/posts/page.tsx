import {HydrationBoundary, dehydrate} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";
import {PostType} from "@/types/types";
import PostCardPrefetch from "@/components/cards/post-card-prefetch";

import getQueryClient from "../getQueryClient";

export default async function page() {
  const SingleQueryClient = getQueryClient();

  const posts = await SingleQueryClient.fetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(SingleQueryClient)}>
      <div className="space-y-4 px-10 md:px-20 xl:px-40 my-20">
        <h1 className="text-2xl font-bold">Post Server Side</h1>
        {posts?.map((post: PostType) => <PostCardPrefetch {...post} key={post.id} />)}
      </div>
    </HydrationBoundary>
  );
}
