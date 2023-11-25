import { Link } from "react-router-dom";

interface UserCardProps {
  posts: Record<string, any>[];
  user: Record<string, any>;
}

export const UserCard = ({ posts, user }: UserCardProps) => {
  return (
    <Link to={`/user/${user?.id}`}>
      <aside className="flex flex-col sm:flex-row gap-2 justify-between p-5 border-2 rounded-[5px]">
        <p>
          <b>Name:</b> {user?.name}
        </p>
        <p>
          <b>Posts:</b> {posts?.length}
        </p>
      </aside>
    </Link>
  );
};
