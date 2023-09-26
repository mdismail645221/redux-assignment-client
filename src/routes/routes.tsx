import { createBrowserRouter } from "react-router-dom";
import App from '../App';
// import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <div>NOT FOUND</div>
    }
])




export default router;