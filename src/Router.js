import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EntryAssignment from "./pages/EntryAssignment";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/entry" element={<EntryAssignment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
