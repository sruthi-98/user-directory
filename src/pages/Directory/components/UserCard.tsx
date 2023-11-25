import { Link } from "react-router-dom";

interface UserCardProps {
  posts: Record<string, any>[];
  user: Record<string, any>;
}

export const UserCard = ({ posts, user }: UserCardProps) => {
  return (
    <Link to={`/user/${user?.id}`}>
      <p>Name: {user?.name}</p>
      <p>Posts: {posts?.length}</p>
    </Link>
  );
};
