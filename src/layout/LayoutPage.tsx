import { Navigate, Route, Routes } from "react-router";
import { Menu } from "../components/Menu";
import { DashBoardRoutes } from "../routes/routes";

export const LayoutPage = () => {
  return (
    <div>
      <h2>DashBoard Principal</h2>

      <p>Menu de Navegacion</p>
      <Menu routes={DashBoardRoutes} />
      <Routes>
        {DashBoardRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route
          path={"/*"}
          element={<Navigate to={DashBoardRoutes[0].path} replace />}
        />
      </Routes>
    </div>
  );
};

export default LayoutPage;
