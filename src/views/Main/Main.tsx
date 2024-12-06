import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar/Sidebar"
function Main() {

    return (
        <>
            <div>
                <Sidebar></Sidebar>
                <Outlet />
            </div>
        </>
    )
}

export default Main
