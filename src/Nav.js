import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Nav() {
  const [show, handleShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);


  const handleDropdown = () => {
    if (!dropdown) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

return (

      <div className={`nav__contents ${show && "nav__black"}`}>
        <div className="nav__contents1">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            className="nav__logo"
            onClick={() => history.push("/")}
          />
          <ul className="nav__contents1-navItems">
            <li
              style={{ fontWeight: "bolder" }}
              onClick={() => history.push("/")}
            >
              Home
            </li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="nav__contents2">
          <div className="nav__contents2-profile" onClick={handleDropdown}>
            <img
              onClick={() => history.push("/profile")}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuaZ74EPxcdnvaKzGtRLh00WiJkJpgs01Rg3Y66vrgrNyaKFaUuO0L0g2x26nukbZ1uY&usqp=CAU"
              alt=""
              className="nav__avatar"
            />
            <ArrowDropDownIcon style={{ color: "white", size: 40 }} />
            {dropdown && (
              <div
                className="nav__account-dropdown"
                onMouseLeave={handleDropdown}
              >
                <ul className="nav__dropdown-profiles">
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuaZ74EPxcdnvaKzGtRLh00WiJkJpgs01Rg3Y66vrgrNyaKFaUuO0L0g2x26nukbZ1uY&usqp=CAU"
                      alt=""
                    />
                    <p>Devansh</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLO7XSN_taND9qG586sXzN9LtnGir6w8TEOmrKcj86fDOLVmv2FlMy5EyEW0pXNx--pE&usqp=CAU"
                      alt=""
                    />
                    <p>Hetarth</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUgno4IrHa488eDArmkQhktmZoQOz-gkYeQ&usqp=CAU"
                      alt=""
                    />
                    <p>Rutvi</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVNxpxSBe-RA0h6yaML3_VrTWa_FYaEKxQ2RjWYjske1QPixHcISzO69xN0ayXiApeCk&usqp=CAU"
                      alt=""
                    />
                    <p>Ayushi</p>
                  </li>
                  <li className="nav__dropdown-profile">
                    <img
                      src="https://i.imgur.com/LJ9dB0T.png"
                      alt=""
                    />
                    <p>Sushant</p>
                  </li>
                </ul>
                <div className="nav__dropdown-manage">
                  <p onClick={() => history.push("/profiles")}>
                    Manage Profiles
                  </p>
                </div>
                <ul className="nav__dropdown-account">
                  <li onClick={() => history.push("/profile")}>Account</li>
                  <li>Help center</li>
                  <li onClick={() => auth.signOut()}>Sign out of Netflix</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
  
  );
}

export default Nav;
