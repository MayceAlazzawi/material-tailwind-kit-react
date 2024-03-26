import { Home, SignIn} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About us",
    href: "#aboutus",
  },
  {
    name: "services",
    href: "#services",
   
  },
];

export default routes;
