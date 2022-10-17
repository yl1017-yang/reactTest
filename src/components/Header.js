// import logo from "../assets/images/logo.png";
import { Link, NavLink } from 'react-router-dom';


// 리액트 링크 : https://react-router.vlpt.us/1/03.html

function Header(){
    const activeStyle = {
        color: 'green'
    };

  return(
   <div className="top_area">
    <h1 className="logo">
        {/* <img src={logo} alt={"sosohanya logo"} /> */}
        LOGO
    </h1>
      <nav className="menus">
          <ul>
              <li>
                    {/* <Link to="/reactTest/">메인</Link> */}
                    <Link to="/reactTest/">메인</Link>
              </li>
              <li>
                    <NavLink exact to="/reactTest/Page1" activeStyle={activeStyle}>서브페이지-1</NavLink>
              </li>
              <li>
                    {/* <Link to={`/reactTest/Page2`} >서브페이지-2</Link> */}
                    <NavLink to="/reactTest/Page2" activeStyle={activeStyle}>서브페이지-2</NavLink>
              </li>
          </ul>
      </nav>
  </div>
  )
}

export default Header;