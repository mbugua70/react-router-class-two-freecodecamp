import HostHeader from "./hostheader";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <>
          <HostHeader/>
          <Outlet/>

        </>
     );
}

export default HostLayout;