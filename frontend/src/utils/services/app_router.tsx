import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Body from "../../pages/body";
import SignupPage from "../../pages/signup";
import LoginPage from "../../pages/login";
import AboutUsPage from "../../pages/about_us_page";
import Home from "../../pages/home";
import { routerConstants } from "../app_constants/router_constants";

export const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />,
            children:[
                {
                    path:'/',
                    element: <Body/>,
                    children:[
                        {
                            path:routerConstants.homePage,
                            
                            element:<Home/>
                        },
                        {
                            path:routerConstants.signupPage,
                            element: <SignupPage/>
                        },
                        {
                            path:routerConstants.loginPage,
                            element:<LoginPage/>
                        },
                        {
                            path:routerConstants.aboutUsPage,
                            element:<AboutUsPage/>
                        }
                    ]
                },
                
            ]
        }
    ]
)