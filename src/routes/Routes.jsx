import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Category from "../components/Category/Category";
import News from "../components/News/News";
import NewsPage from "../components/News/NewsPage/NewsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
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
        path: 'news',
        element: <News></News>,
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