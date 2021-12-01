import { Navigate, Route, Routes } from "react-router";
import { DefaultRoutes } from "./routes";

export const MainRoutes = () => {
  return (
    <Routes>
      {DefaultRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route
        path={"/*"}
        element={<Navigate to={DefaultRoutes[0].path} replace />}
      />
    </Routes>
  );
};
