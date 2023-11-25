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

  return (
    <>
      <h1 className="font-bold text-3xl text-center mb-5">User details</h1>
      {isUserDetailsLoading ? (
        <Loader />
      ) : isUserDetailsError ? (
        <ErrorMessage message="Unable to fetch user details" />
      ) : (
        <aside className="flex justify-between gap-1 flex-wrap p-5 border-2 rounded-[5px] mb-10">
          <section>
            <p className="font-bold">{userDetails?.name}</p>
            <p className="text-slate-700">
              {userDetails?.username} | {userDetails?.company?.catchPhrase}
            </p>
          </section>
          <section>
            <p className="italic">
              {userDetails?.address?.suite}, {userDetails?.address?.street},{" "}
              {userDetails?.address?.city}
            </p>
            <p>
              <span className="text-blue-800 font-semibold">
                {userDetails?.email}
              </span>{" "}
              |{" "}
              <span className="text-slate-800 font-semibold">
                {userDetails?.phone}
              </span>
            </p>
          </section>
        </aside>
      )}
    </>
  );
};
