import { Link } from "react-router-dom";
import { SelectCountry } from "./SelectCountry";

export const UserDetailsHeader = () => {
  return (
    <header className="flex items-center justify-between flex-wrap gap-5 mb-10">
      <Link className="py-2 px-5 bg-gray-200 rounded-[5px]" to="/">
        Back
      </Link>
      <SelectCountry />
    </header>
  );
};
