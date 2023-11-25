import { PostCardSection } from "pages/UserDetails/components/PostCardSection";
import { UserDetailsCard } from "pages/UserDetails/components/UserDetailsCard";
import { UserDetailsHeader } from "pages/UserDetails/components/UserDetailsHeader";

export const UserDetails = () => {
  return (
    <div>
      <UserDetailsHeader />
      <UserDetailsCard />
      <PostCardSection />
    </div>
  );
};
