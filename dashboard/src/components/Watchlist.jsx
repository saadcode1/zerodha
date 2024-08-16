import { useState } from "react";
import {
    BarChartOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    MoreHoriz,
  } from "@mui/icons-material";

  import { Tooltip, Grow } from "@mui/material";

import {watchlist} from "../data/data";

export default function Watchlist(){
  
    return(
        <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
       <ul className="list" style={{padding:"0"}}>
        {watchlist.map((stock,index)=>{
            return <WatchListItem stock={stock} key={index}/>;
        })}
       </ul>
      </div>
    )
}


const WatchListItem=({stock})=>{
    const [mouseHover,setMouseHover]=useState(false);
    const  OnMouseEnter=()=>{
           setMouseHover(true);
       }
   
       const  OnMouseLeave=()=>{
           setMouseHover(false);
       }
    return(
        <li onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave}>
         <div className="item">
            <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
            <div className="itemInfo">
                <spn className="percent">{stock.percent}</spn>
                {
                    stock.isDown ? (<KeyboardArrowDown/>):(
                    
                    <KeyboardArrowUp/>)
                }
                 <span className="price">{stock.price}</span> 
            </div>
         </div>

         { mouseHover && <WatchListActions uid={stock.name} />}
        </li>
    )
}

const WatchListActions=({uid})=>{
 return(
  <span className="actions">
   <span className="chiled-span">
   <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          // onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
        title="Sell (S)"
        placement="bottom"
        arrow
        TransitionComponent={Grow}
        >
        <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
   </span>
  </span>
 )
}