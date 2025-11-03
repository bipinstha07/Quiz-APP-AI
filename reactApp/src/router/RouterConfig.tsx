import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Terms from "../Terms";
import Contact from "../Contact";
import About from "../About";
import Privacy from "../Privacy";


const routerObj  = createBrowserRouter(
    [
        {path:'/',
            element: <App/>
        },
        {
            path:'/terms',
            element: <Terms/>
        },
        {
            path:'/contact',
            element: <Contact/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/privacy',
            element: <Privacy/>
        }
    
    ]
)

const RouterConfig = ()=>{
    return (
        <>
            <RouterProvider router={routerObj}/>
        </>
    )
}

export default RouterConfig;