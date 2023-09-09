import Navbar from "../../components/navbar";

import { Outlet } from "react-router-dom";

function Authenticated() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Authenticated;