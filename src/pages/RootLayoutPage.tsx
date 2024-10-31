import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import ProtectedRoute from "../components/common/ProtectedRoute";

export default function RootLayoutPage() {
  return (
    <ProtectedRoute>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </ProtectedRoute>
  );
}
