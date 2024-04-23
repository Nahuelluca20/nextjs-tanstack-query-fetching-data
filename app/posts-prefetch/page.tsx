import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

import {getPosts} from "@/queries/post-queries";
import {getUserNameById} from "@/queries/user-queries";

import Posts from "./posts";

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["prefetch-posts"],
    queryFn: async () => {
      const posts = await getPosts();

      for (const PostItem of posts) {
        if (PostItem.id) {
          queryClient.prefetchQuery({
            queryKey: ["username", PostItem.id],
            queryFn: () => getUserNameById(PostItem.id),
          });
        }
      }

      return posts;
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
