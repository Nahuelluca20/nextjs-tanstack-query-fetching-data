// app/getQueryClient.tsx
import {QueryClient} from "@tanstack/react-query";
import {cache} from "react";

// cache() is scoped per request, so we don't leak data between requests
const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
      },
    }),
);

export default getQueryClient;
