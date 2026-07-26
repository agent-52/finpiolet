import App from "./App";
import { SignInPage } from "./features/auth/pages/SignInPage";
import { SignUpPage } from "./features/auth/pages/SignUpPage";
// import AnalyticsPage from "./pages/Analytics";


// import SignUp from "./pages/auth/Signup";
// import BudgetsPage from "./pages/BudgetPage";
// import GoalsPage from "./pages/GoalPage";
// import TransactionsPage from "./pages/TransactionPage";

const routes = [
    {
        path:"/",
        element:<App/>,
        // errorElement
    },
    {
        path:"/signin",
        element:<SignInPage/>
    },
    {
        path:"/signup",
        element:<SignUpPage/>
    },
    {
        path:"/dashboard",
        element:<SignUpPage />
    }
    // {
    //     path:"/budgets",
    //     element:<BudgetsPage/>
    // },
    // {
    //     path:"/transactions",
    //     element:<TransactionsPage />
    // },
    // {
    //     path:"/analytics",
    //     element:<AnalyticsPage />
    // },
    // {
    //     path:"/goals",
    //     element:<GoalsPage/>
    // }
    // {
    //     path:"profile/:name",
    //     element:<Profile/>
    // }
]

export default routes