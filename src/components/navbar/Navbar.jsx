import { ArrowDropDown, LaptopWindows, Notifications, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, setIsScrolled]= useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset ===0 ? false : true);
        return ()=> (window.onscroll =null);
    };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My list</span>
            </div>


            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://wallpapercave.com/wp/I5Z5F6d.jpg" alt="" />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar