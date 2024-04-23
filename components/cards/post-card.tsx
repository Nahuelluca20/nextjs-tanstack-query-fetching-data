"use client";

import {CalendarIcon, HeartIcon} from "@radix-ui/react-icons";
import {useQuery} from "@tanstack/react-query";

import {CardTitle, CardHeader, CardContent, CardFooter, Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {PostType} from "@/types/types";
import {Badge} from "@/components/ui/badge";
import {getUserNameById} from "@/queries/user-queries";

export default function PostCard({tags, title, id, reactions, userId}: PostType) {
  const {data: userName} = useQuery({
    queryKey: ["username", id],
    queryFn: () => getUserNameById(id),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex gap-2 py-2">
          {tags?.map((tag, index) => <Badge key={`tag-${tag}-${index}-${userId}`}>{tag}</Badge>)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-sm text-gray-500 dark:text-gray-400">
              <HeartIcon className="w-4 h-4" />
              <span>{reactions} Reactions</span>
            </div>
            <div className="flex items-center gap-0.5 text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="w-4 h-4" />
              <time dateTime="2023-11-12">November 12, 2023</time>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="grid items-center gap-4 sm:flex sm:gap-8">
          <div className="flex items-center gap-4">
            <div className="text-sm not-italic">Posted by {userName}</div>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              View User
            </Button>
            <Button size="sm">View Post</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
