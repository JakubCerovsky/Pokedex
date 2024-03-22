import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
