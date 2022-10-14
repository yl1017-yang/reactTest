import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NoLayout from "./pages/NoLayout";

function RoutesMap(){
    return <BrowserRouter>
        <Routes>
            <Route path={"/reactTest/"} element={<Layout />}> {/* 감싸는 Layout과 하위 Contents 구성 */}
                <Route path={"/reactTest/page1"} element={<Page1/>}/>
                <Route path={"/reactTest/page2"} element={<Page2/>}/>
            </Route>
            <Route path={"/reactTest/no-layout"} element={<NoLayout/>}/>
        </Routes>
    </BrowserRouter>
}

export default RoutesMap;