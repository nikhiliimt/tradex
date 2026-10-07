import React, {useState}from "react";
import {Tooltip,Grow} from "@ui/material";
import { watchlist } from "../data/data";
const WatchList=()=>{
    return(
        <div className="watchlist-container">
            <div className="search-container">
                <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="search"/>
                <span className="counts">{watchlist.length}/50</span>
            </div>
            <ul className="list">
                {watchlist.map((stock,index)=>{
                    <WatchListItem stock ={stock} key={index}/>
                    

                })}


            </ul>
        </div> 
    );
};
export default WatchList;