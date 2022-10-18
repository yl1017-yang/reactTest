import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NoLayout from "./pages/NoLayout";

const NotFound = () => {
    return <Link to="..">404 페이지-없는 페이지임</Link>;
};

function RoutesMap(){
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/reactTest/" element={<Layout />}> {/* 감싸는 Layout과 하위 Contents 구성 */}
                <Route path="/reactTest/" element={<Main/>}/>
                <Route path="page1" element={<Page1/>}/>
                <Route path="page2" element={<Page2/>}/>
            </Route>
            <Route path="/reactTest/no-layout" element={<NoLayout/>}/>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesMap;