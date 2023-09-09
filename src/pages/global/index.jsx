import Toastr from "../../components/toastr/toastr";

import { Outlet } from "react-router-dom";

function Global() {
    return (
        <>
            <Outlet />
            <Toastr />
        </>
    )
}

export default Global;