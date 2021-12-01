import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "../components/Menu";
import { ReactLogo } from "../components/ReactLogo";
import { Title } from "../components/Title/Title";
import { MainRoutes } from "../routes/MainRoutes";
import { DefaultRoutes } from "../routes/routes";

const Navigation = () => {
  return (
    <div className="main-layout">
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className={"sideBar"}>
            <ReactLogo />
            <Title text={"Navegación"} />
            <Menu routes={DefaultRoutes} fondo={true} />
          </div>
          <div style={{ padding: 10 }}>
            <MainRoutes />
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default Navigation;
