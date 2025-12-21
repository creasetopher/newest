import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [
//     index("NewRoutePage/NewRoutePage.tsx")
// ] satisfies RouteConfig;


// export default [
//   // parent route
//   route("/", "./components/NewHomePage/NewHomePage.tsx", [
//     // child routes renders into the NewHomePage.tsx Outlet at /newHome
//     // index("./home.tsx"),
//     // route("settings", "./settings.tsx"),
//   ]),
// ] satisfies RouteConfig;


export default [
  // parent route
  route("/", "./components/NewHomePage/NewHomePage.tsx"),
  route("/testRoute", "./components/NewRoutePage/NewRoutePage.tsx"),

] satisfies RouteConfig;