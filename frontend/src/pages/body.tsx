import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";


const Body = ()=>{
    return (
    < >
        <Header/>
        <div className="body">
        <Outlet/>
        </div>
   
        </>
    );
}

export default Body;