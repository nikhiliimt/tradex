import React,{useState} from "react";
import {Link} from "react-router-dom"
const Menu=()=>{
    const [isSelectedMenu,setSelectedMenu]=useState(0);
    const [isProfileDropDownOpen,setIsProfileDropdownOpen]=useState(false);

    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    };
    const handleProfileClick=(index)=>{
        setIsProfileDropdownOpen(!isProfileDropDownOpen);
    };

    const menuClass ="menu";
    const activeMenuClass="menu selected"

    return(
        <div className="menu-container">
            <img src="Tradex.png" style={{width:"30%"}}/>
            <div className="menus">
                <ul>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/" onClick={()=>handleMenuClick(0)}>
                    <p className="{selectedMenu===0 ? activeMenuClass:menuClass:}">Dashboard</p> </Link></li>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/orders" onClick={()=>handleMenuClick(1)}>
                    <p className="{selectedMenu===1 ? activeMenuClass:menuClass:}">Orders</p> </Link></li>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/holdings" onClick={()=>handleMenuClick(2)}>
                    <p className="{selectedMenu===2 ? activeMenuClass:menuClass:}">Holdings</p> </Link></li>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/positions" onClick={()=>handleMenuClick(3)}>
                    <p className="{selectedMenu===3 ? activeMenuClass:menuClass:}">Positions</p> </Link></li>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/funds" onClick={()=>handleMenuClick(4)}>
                    <p className="{selectedMenu===4 ? activeMenuClass:menuClass:}">Funds</p> </Link></li>
                    <li><Link style={{textDecoration:"none"}}  
                     to="/Apps" onClick={()=>handleMenuClick(5)}>
                    <p className="{selectedMenu===5 ? activeMenuClass:menuClass:}">Apps</p> </Link></li>
                    {/* <li><Link style={{textDecoration:"none"}}><p>Orders</p></Link></li>
                    <li><Link style={{textDecoration:"none"}}><p>Holdings</p></Link></li>
                    <li><Link style={{textDecoration:"none"}}><p>Positions</p></Link></li>
                    <li><Link style={{textDecoration:"none"}}><p>Funds</p></Link></li> */}
                </ul>
                <hr/>
                <div className="Profile" onClick={handleProfileClick}></div>
                <div className="avatar">ZU</div>
                <p className="avatar">USERID</p>

            </div>

        </div>
    )
}

export default Menu;