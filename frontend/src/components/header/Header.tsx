
import { useNavigate } from "react-router-dom";
import { appImages } from "../../utils/app_constants/app_images";
import { appLocalizationString } from "../../utils/app_constants/app_string_constants";
import { routerConstants } from "../../utils/app_constants/router_constants";
import Login from "../auth/Login";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store/store";



const Header = ()=>{

    const navigate = useNavigate();
    const [loginModal,setLoginModal] = useState(false);
    const isLoggedIn:boolean = useSelector((state:IRootState)=>state.auth.isLoggedIn);
    const langKey:string = useSelector((state:IRootState)=>state.lang.langKey);

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
                    >{appLocalizationString[`${langKey}`].kHome}</li>
                    <li onClick={()=>{
                        navigate(routerConstants.aboutUsPage);
                    }} >{appLocalizationString[`${langKey}`].kAboutUs}</li>
                    { !isLoggedIn?
                    <li onClick={()=>{
                        setLoginModal(true)
                    }}>{appLocalizationString[`${langKey}`].kLogin}</li>:
                    <li onClick={()=>{

                    }}>{appLocalizationString[`${langKey}`].kLogout}</li>
                }
                </ul>
            </div>
        </div>
        <Login open={loginModal} onClick={()=>{setLoginModal(false)}}/>
        </>
    )
}

export default Header;