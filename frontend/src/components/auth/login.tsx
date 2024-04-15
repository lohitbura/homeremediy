
import { IoIosClose } from "react-icons/io";
import { appImages } from "../../utils/app_constants/app_images";
import { useRef, useState } from "react";
import { loginUser } from "../../apis/auth_apis";
import { authResponseInterface } from "../../utils/interfaces/auth_interface";
import { appConstants } from "../../utils/app_constants/app_string_constants";

 type LoginInput = {
    open:boolean,
    onClick: () => void
}

const Login = ({open,onClick}:LoginInput)=>{

    const [isLogin,setLoginState] = useState(true);

    const password = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const name = useRef<HTMLInputElement>(null);

    const buttonAction = async()=>{
        if(email.current!==null && password.current!==null){
        if(isLogin){
        const loginData:authResponseInterface =   await loginUser({username:email.current.value,password:password.current.value});

        if(loginData.response===appConstants.success){
            onClick();
        }
        }
    }
    }

    if(!open){
        return <></>;
    }
    return (
        <div className="overlay" onClick={()=>{
            onClick();
        }}>
            <div className="loginModal" onClick={(e) => {
          e.stopPropagation();
        }}>
                <div className="loginContentLeft">
                    <h2>
                        Login or Register in Seconds
                    </h2>
                    <h5>
                       {isLogin?"Login":"Register"}
                    </h5>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input placeholder="Email" type="email" ref={email}/>
                        { 
                            !isLogin?<input placeholder="Name" type="text" ref={name}/>:<></>
                        }
                        <input placeholder="Password" type="password" ref={password}/>
                        <div className="loginButton"><button className="btnPrimary" onClick={(e)=>{
                            e.stopPropagation();
                            console.log("here are we")
                            if(email!=null && password!=null){
                            buttonAction();
                            }
                        }}>Submit</button></div>
                        
                    </form>
                    <div className="authModeSwitchContainer"><p> {isLogin? "Didn't have any account? " : "Already have an account? "}<span onClick={()=>{
                        setLoginState(!isLogin);
                    }}>{isLogin?"Register Here":"Login Here"}</span></p></div>

                </div>
                <div className="loginContentRight">
                        <img src={appImages.loginImage} />
                        <div className="loginCloseButton" onClick={()=>{onClick()}}>
                       <div className="loginCloseButtonItem"><IoIosClose /></div> 
                        </div>
                </div>
            </div>
        

        </div>
    )
}

export default Login;