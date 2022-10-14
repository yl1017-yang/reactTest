// import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Header(){
  return(
   <div className="top_area">
    <h1 className="logo">
        {/* <img src={logo} alt={"sosohanya logo"} /> */}
        LOGO
    </h1>
      <nav className="menus">
          <ul>
              <li className={"on"}>
                    {/* <a href={"/#"}>Page 1</a> */}
                    <Link to={`/reactTest/`} >메인</Link>
              </li>
              <li>
                    <Link to={`/reactTest/Page1`} >서브페이지-1</Link>
              </li>
              <li>
                    <Link to={`/reactTest/Page2`} >서브페이지-2</Link>
              </li>
          </ul>
      </nav>
  </div>
  )
}

export default Header;