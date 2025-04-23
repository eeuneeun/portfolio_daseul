import { lazy } from "react";
import GlobalLayout from "./pages/_layout";
 
const Main= lazy(() => import("./pages/mainPage"));
const MyInfo = lazy(() => import("./pages/myinfoPage"))
const Portfolio = lazy(() => import("./pages/portfolio"))
 
 
export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/myinfo", element: <MyInfo /> },
      { path: "/portfolio", element: <Portfolio /> }
    ],
  },
];
 
export const pages = [
  { route: "/" },
  { route: "/myinfo" },
  { route: "/portfolio" }

];