import Lnb from "../components/Lnb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

function Layout(){
    return( 
    <div className="wrap">
        <div className="header-area">
            <Header/>
        </div>
        <div className="container-area">
            <div className="lnb">
                <Lnb/>
            </div>
            <div className="contents">
                <Outlet/> {/* 이 부분이 하위 Route에 매핑된 컴포넌트(page1, page2)로 치환됨 */}
            </div>
        </div>
        <div className="footer-area">
            <Footer/>
        </div>
    </div>
    )
}

export default Layout;