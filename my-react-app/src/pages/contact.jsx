import { Link, Outlet } from "react-router-dom";
import Navbar from "../componant/navbar";

const Contact=()=>{
    return(
        <div>
            <Navbar/>
            <div className="text-5xl"> this is contact page</div>
            <Link className="button" to='C1'>c1</Link>
            <Link className="button" to='C2'>c2</Link>
            <Link className="button" to='C3'>c3</Link>
            <Outlet></Outlet>

        </div>
    )
}
export default Contact