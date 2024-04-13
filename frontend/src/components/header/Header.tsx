
import { useNavigate } from "react-router-dom";
import { appImages } from "../../utils/app_constants/app_images";
import { appLocalizationString } from "../../utils/app_constants/app_string_constants";
import { routerConstants } from "../../utils/app_constants/router_constants";


const Header = ()=>{

    const navigate = useNavigate();

    return (
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
                        navigate(routerConstants.loginPage)
                    }}>{appLocalizationString.en.kLogin}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;