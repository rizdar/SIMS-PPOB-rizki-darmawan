import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TopUpPage from "./pages/TopUpPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import * as Constant from "./constant/Constant";

const router = createBrowserRouter([
  {
    path: Constant.LOGINPAGE,
    element: <LoginPage />,
  },
  {
    path: Constant.REGISTERPAGE,
    element: <RegistrationPage />,
  },
  {
    path: Constant.TOPUPPAGE,
    element: <TopUpPage />,
  },
  {
    path: Constant.TRANSACTIONPAGE,
    element: <TransactionHistoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
