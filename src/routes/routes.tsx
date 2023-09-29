import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Home from "../pages/Home/Home";
// import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/',
                element: <Home/>,
                errorElement: <div>Not found</div>
            }
        ]
    }
])




export default router;