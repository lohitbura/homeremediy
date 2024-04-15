
import { useNavigate } from "react-router-dom";
import { appImages } from "../../utils/app_constants/app_images";
import { appLocalizationString } from "../../utils/app_constants/app_string_constants";
import { routerConstants } from "../../utils/app_constants/router_constants";
import Login from "../auth/login";
import { useState } from "react";


const Header = ()=>{

    const navigate = useNavigate();
    const [loginModal,setLoginModal] = useState(false);

    return (
        <>
        <div className="header">
            <div className="header-logo">
                <img src={appImages.appLogo}/>
                
            </div>
            <div className="header-items">
                <ul>
                    <li
                    onClick={()=>{
                        navigate(routerConstants.homePage);
                    }}
                    >{appLocalizationString.en.kHome}</li>
                    <li onClick={()=>{
                        navigate(routerConstants.aboutUsPage);
                    }} >{appLocalizationString.en.kAboutUs}</li>
                    <li onClick={()=>{
                        setLoginModal(true)
                    }}>{appLocalizationString.en.kLogin}</li>
                </ul>
            </div>
        </div>
        <Login open={loginModal} onClick={()=>{setLoginModal(false)}}/>
        </>
    )
}

export default Header;