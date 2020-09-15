import { lazy } from 'react'

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"))
const FormPage = lazy(() => import("./components/FormPage/FormPage"))
const Home = lazy(() => import("./components/Home/Home"))

const routes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: Home
    },
    {
        path: "/form",
        name: "FormPage",
        exact: true,
        component: FormPage
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        exact: true,
        component: Dashboard
    }
]

export default routes