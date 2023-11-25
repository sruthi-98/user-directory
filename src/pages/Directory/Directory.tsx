import { ErrorMessage } from "components/ErrorMessage";
import { Loader } from "components/Loader";
import { UserCard } from "pages/Directory/components/UserCard";
import { fetchPosts, fetchUsers } from "endpoints";
import { useFetchData } from "hooks/useFetchData";
import { findPostsByUser } from "utils";

export const Directory = () => {
  const {
    isLoading: isUserListLoading,
    isError: isUserListError,
    data: usersList,
  } = useFetchData(fetchUsers);
  const {
    isLoading: isPostListLoading,
    isError: isPostListError,
    data: postList,
  } = useFetchData(fetchPosts);

  return (
    <div>
      <h1>Directory</h1>
      {isUserListLoading || isPostListLoading ? (
        <Loader />
      ) : isUserListError || isPostListError ? (
        <ErrorMessage message="An error has occured. Please try again." />
      ) : (
        <div>
          {usersList.map((user: Record<string, any>) => (
            <UserCard
              key={user?.id}
              posts={findPostsByUser(postList ?? [], user?.id)}
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  );
};
