import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";

import Posts from "./posts";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["prefetch-posts"],
    queryFn: getPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
