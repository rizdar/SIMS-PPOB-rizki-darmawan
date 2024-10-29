import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TopUpPage from "./pages/TopUpPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/top-up",
    element: <TopUpPage />,
  },
  {
    path: "/transaction-history",
    element: <TransactionHistoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
