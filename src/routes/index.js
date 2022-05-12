import PageNotFound from "../components/Common/PageNotFound";
import CityPage from "../features/City";
import StudentPage from "../features/Student";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import AuthPage from "../features/Auth";

// Public routes to routing inside pages
export const publicRoutes = [
  { path: "/students/*", Component: StudentPage },
  { path: "/cities/*", Component: CityPage },
  { path: "/auth/*", Component: AuthPage, auth: true },
  { path: "*", Component: PageNotFound, empty: true },
];

// List page to render links on Sidebar
export const listPages = [
  { to: "/", Icon: DashboardIcon, title: "Dashboard" },
  { to: "/students", Icon: GroupIcon, title: "Students" },
  { to: "/auth/login", Icon: LoginIcon, title: "Login" },
  { to: "/auth/register", Icon: HowToRegIcon, title: "Register" },
];
