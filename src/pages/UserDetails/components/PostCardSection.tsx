import { useParams } from "react-router-dom";

import { ErrorMessage } from "components/ErrorMessage";
import { Loader } from "components/Loader";
import { useFetchData } from "hooks/useFetchData";
import { fetchUserPosts } from "endpoints";
import { PostCard } from "./PostCard";

export const PostCardSection = () => {
  const params = useParams();
  const userId = params?.userId?.toString() ?? "";

  const {
    isLoading: isPostLoading,
    isError: isPostListError,
    data: postList,
  } = useFetchData(() => fetchUserPosts(userId));

  if (isPostLoading) return <Loader />;

  if (isPostListError)
    return <ErrorMessage message="Unable to fetch user posts" />;

  return (
    <div>
      {postList.map((post: Record<string, any>) => (
        <PostCard key={post?.id} post={post} />
      ))}
    </div>
  );
};
