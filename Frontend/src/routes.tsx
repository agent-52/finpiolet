import App from "./App";
import AnalyticsPage from "./pages/Analytics";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/Signup";
import BudgetsPage from "./pages/BudgetPage";
import TransactionsPage from "./pages/TransactionPage";

const routes = [
    {
        path:"/",
        element:<App/>,
        // errorElement
    },
    {
        path:"/signin",
        element:<SignIn/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/budgets",
        element:<BudgetsPage/>
    },
    {
        path:"/transactions",
        element:<TransactionsPage />
    },
    {
        path:"/analytics",
        element:<AnalyticsPage />
    }
    // {
    //     path:"profile/:name",
    //     element:<Profile/>
    // }
]

export default routes