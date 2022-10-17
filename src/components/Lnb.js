// import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Lnb(){
    return( 
    <div className="lnb">
        {/* <img src={logo} alt={"sosohanya logo"} /> */}
        <div className="menus">
            <ul>
            <li>
                    <Link exact to="/reactTest/">메인</Link>
              </li>
              <li>
                    <Link exact to="/reactTest/Page1">서브페이지-1</Link>
              </li>
              <li>
                    <Link exact to="/reactTest/Page2">서브페이지-2</Link>
              </li>
            </ul>
        </div>
    </div>
    )
}

export default Lnb;