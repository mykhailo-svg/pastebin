import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { routePath } from "./shared/config/routePath";

export const Routing = () => {
  return (
    <Routes>
      <Route path={routePath.HOME} element={<Home />} />
    </Routes>
  );
};
