import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Category from "../components/Category/Category";
import News from "../components/News/News";
import NewsPage from "../components/News/NewsPage/NewsPage";
import About from "../components/About/About";
import Career from "../components/Career/Career";
import Register from "../components/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../components/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/career',
        element: <Career></Career>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/terms',
        element: <Terms></Terms>
    },
    {
        path: 'news',
        element: <PrivetRoute><News></News></PrivetRoute>,
        children: [
            {
                path: ':id',
                element: <NewsPage></NewsPage>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;