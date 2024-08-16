import Apps from "./Apps";
import Funds from "./Funds";
import {Holdings} from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Watchlist from "./Watchlist";
import Summary from "./Summary";
import {  Route, Routes } from "react-router-dom";
export default function Dashboard(){
    return(
        <>
         <div className="dashboard-container">
     
        <Watchlist />
     
      <div className="content">
         <Routes>
            <Route path="/" element={<Summary/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/holdings" element={<Holdings/>}/>
            <Route path="/positions" element={<Positions/>}/>
            <Route path="/funds" element={<Funds/>}/>
            <Route path="/apps" element={<Apps/>}/>
         </Routes>
        
         </div>
         </div>
        
        </>
    )
}