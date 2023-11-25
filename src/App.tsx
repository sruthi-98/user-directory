import { Route, Routes } from "react-router-dom";

import { Directory } from "pages/Directory/Directory";
import { NotFound } from "pages/NotFound";
import { UserDetails } from "pages/UserDetails/UserDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Directory />} />
      <Route path="/user/:userId" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
