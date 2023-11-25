import { useParams } from "react-router-dom";

import { ErrorMessage } from "components/ErrorMessage";
import { Loader } from "components/Loader";
import { useFetchData } from "hooks/useFetchData";
import { fetchUserDetails } from "endpoints";

export const UserDetailsCard = () => {
  const params = useParams();
  const userId = params?.userId?.toString() ?? "";

  const {
    isLoading: isUserDetailsLoading,
    isError: isUserDetailsError,
    data: userDetails,
  } = useFetchData(() => fetchUserDetails(userId));

  if (isUserDetailsLoading) return <Loader />;

  if (isUserDetailsError)
    return <ErrorMessage message="Unable to fetch user details" />;

  return (
    <div>
      <p>{userDetails?.name}</p>
      <p>
        {userDetails?.username} | {userDetails?.company?.catchPhrase}
      </p>
      <p>
        {userDetails?.address?.suite}, {userDetails?.address?.street},{" "}
        {userDetails?.address?.city}
      </p>
      <p>
        {userDetails?.email} | {userDetails?.phone}
      </p>
    </div>
  );
};
