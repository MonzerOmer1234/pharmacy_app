import MainNavigation from "../components/navigation/Main Navigation";
import { Outlet } from "react-router-dom";

function RootLayout(){
    return <>
     <MainNavigation/>
     <main>
        <Outlet/>
     </main>
    
    </>
}

export default RootLayout;