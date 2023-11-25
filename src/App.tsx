import { Route, Routes } from "react-router-dom";

import { Directory } from "pages/Directory/Directory";
import { NotFound } from "pages/NotFound";
import { UserDetails } from "pages/UserDetails/UserDetails";

function App() {
  return (
    <div className="p-5 mx-auto max-w-[1000px]">
      <Routes>
        <Route path="/" element={<Directory />} />
        <Route path="/user/:userId" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
