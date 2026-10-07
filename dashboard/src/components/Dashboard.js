import React from "react";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "../App";

const Dashboard=()=>{
    return (
        <div className="dashboard-container">
            {/* <WatchList/>  */}
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary/>}/>
                    <Route exact path="/orders" element={<Orders/>}/>
                    <Route exact path="/holdings" element={<Holdings/>}/>
                    <Route exact path="/positions" element={<Postions/>}/>
                    <Route exact path="/" funds={<Funds/>}/>
                    <Route exact path="/apps" element={<App/>}/>

                </Routes>
            </div>
        </div>
    )
}

export default Dashboard;