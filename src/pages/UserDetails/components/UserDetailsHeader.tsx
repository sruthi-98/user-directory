import { Link } from "react-router-dom";
import { SelectCountry } from "./SelectCountry";

export const UserDetailsHeader = () => {
  return (
    <header>
      <Link to="/">Back</Link>
      <SelectCountry />
    </header>
  );
};
