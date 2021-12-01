import { lazy, LazyExoticComponent } from "react";
import SinLazyLoad from "../layout/SinLazyLoad";
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../LazyLoad/pages";

type LazyLoadComponent = () => JSX.Element;

//cargar los componentes poco a poco mientras se renderiza el component
export const DashBoard = lazy(
  () => import(/*WebpackChunkName:"DashBoard"*/ "../layout/LayoutPage")
);

//que renderize las rutas ya sea lazy loading u otras
export interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<LazyLoadComponent> | LazyLoadComponent;
  name: string;
}

export const DefaultRoutes: Route[] = [
  {
    path: "/dashboard/*", //esto significa que empezara a cargar desde aqui las tu
    to: "/dashboard/", //el to es para los links
    Component: DashBoard,
    name: "DashBoard",
  },
  {
    path: "/sinLazy/*",
    to: "/sinLazy/",
    Component: SinLazyLoad,
    name: "Sin Lazy Load",
  },
];

export const DashBoardRoutes: Route[] = [
  {
    path: "lazy1", //esto significa que empezara a cargar desde aqui las tu
    to: "lazy1", //el to es para los links
    Component: LazyLoad1,
    name: "Lazy Load 1",
  },
  {
    path: "lazy2",
    to: "lazy2",
    Component: LazyLoad2,
    name: "Lazy Load 2",
  },
  {
    path: "lazy3",
    to: "lazy3",
    Component: LazyLoad3,
    name: "Lazy Load 2",
  },
];
