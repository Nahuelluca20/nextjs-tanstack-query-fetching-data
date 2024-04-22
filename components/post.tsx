import {PostType} from "@/types/types";

export default function Post({tags, title, id, reactions, body, userId}: PostType) {
  return <div>{title}</div>;
}
