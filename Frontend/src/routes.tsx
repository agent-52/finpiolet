import App from "./App";
import { ProtectedRoute } from "./config/ProtectedRoute";
import { PublicRoute } from "./config/PublicRoute";
import { SignInPage } from "./features/auth/pages/SignInPage";
import { SignUpPage } from "./features/auth/pages/SignUpPage";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { TransactionPage } from "./features/transactions/pages/TransactionPage";
// import AnalyticsPage from "./pages/Analytics";


// import SignUp from "./pages/auth/Signup";
// import BudgetsPage from "./pages/BudgetPage";
// import GoalsPage from "./pages/GoalPage";
// import TransactionsPage from "./pages/TransactionPage";

const routes = [
    
    {
        element:<PublicRoute />,
        children:[
            {
                path:"/signin",
                element:<SignInPage/>
            },
            {
                path:"/signup",
                element:<SignUpPage/>
            },
        ]
    },
    {
        element:<ProtectedRoute />,
        children:[
            {
                path:"/",
                element:<App/>,
                // errorElement
            },
            {
                path:"/dashboard",
                element:<DashboardPage />
            },
            {
                path:"/transactions",
                element:<TransactionPage />
            },
            // {
            //     path:"/analytics",
            //     element:<AnalyticsPage />
            // },
            // {
            //     path:"/goals",
            //     element:<GoalsPage/>
            // },
            // {
            //     path:"profile/:name",
            //     element:<Profile/>
            // },
            // {
            //     path:"/budgets",
            //     element:<BudgetsPage/>
            // }
        ]
    },
    
    
]

export default routes