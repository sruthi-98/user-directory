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

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-5">Posts</h1>
      {isPostLoading ? (
        <Loader />
      ) : isPostListError ? (
        <ErrorMessage message="Unable to fetch user posts" />
      ) : (
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {postList.map((post: Record<string, any>) => (
            <PostCard key={post?.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};
