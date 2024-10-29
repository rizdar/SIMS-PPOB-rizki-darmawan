import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TopUpPage from "./pages/TopUpPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import * as Constant from "./constant/Constant";
import { Provider } from "react-redux";
import store from "./store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
