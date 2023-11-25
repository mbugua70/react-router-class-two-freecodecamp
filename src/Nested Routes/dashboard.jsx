import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <>
        <h2>Hello there, we are creating a dashboard</h2>
        <Outlet/>
        </>
     );
}

export default Dashboard;