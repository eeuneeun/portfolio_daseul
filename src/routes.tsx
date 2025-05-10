import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

const Main = lazy(() => import("./pages/mainPage"));
const MyInfo = lazy(() => import("./pages/myinfoPage"));
const Portfolio = lazy(() => import("./pages/portfolio"));

export const routes = [
  {
    path: "/portfolio_daseul/",
    element: <GlobalLayout />,
    children: [
      { path: "/portfolio_daseul/", element: <Main /> },
      { path: "/portfolio_daseul/myinfo", element: <MyInfo /> },
      { path: "/portfolio_daseul/portfolio", element: <Portfolio /> },
    ],
  },
];

export const pages = [
  { route: "/portfolio_daseul/" },
  { route: "/portfolio_daseul/myinfo" },
  { route: "/portfolio_daseul/portfolio" },
];
