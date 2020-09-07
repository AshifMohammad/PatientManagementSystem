import React, { useEffect, useState } from "react";
import { accountService } from "@/_services";
import "./style.less";
//global header with css
export default function GlobalHeader({ children, permissions }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  const handleSideDoorClick = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("mini-sidebar");
  };
  const handleMobileBtnClick = () => {
    const body = document.getElementsByTagName("body")[0];
    const slideOverlay = document.getElementsByClassName("sidebar-overlay");
    const htmlDoc = document.getElementsByTagName("html");
    const taskWindow = document.getElementById("task_window");

    body.classList.toggle("slide-nav");
    slideOverlay.toggleClass("opened");

    htmlDoc.addClass("menu-opened");
    taskWindow.removeClass("opened");
  };
  const handleMobileUserMenuClick = () => {
    const mobileUserMenuIcon = document.getElementById("mobile-user-menu-icon");
    const mobileUserMenuList = document.getElementById(
      "mobile-user-menu-dropdown-list"
    );
    mobileUserMenuIcon.classList.toggle("show");
    mobileUserMenuList.classList.toggle("show");

    console.log("mobile menu clicked");
  };

  // only show nav when logged in
  if (!user) return null;
  const loggedInUserName = `${permissions} - ${user.title} ${user.firstName},${user.lastName}`;
  return (
    <div className="header global-header">
      <div className="header-left"></div>
      <div id="toggle_btn" className="toggle_btn" onClick={handleSideDoorClick}>
        <span className="bar-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className="page-title-box">
        <h3>ABC Technologies</h3>
      </div>
      <a id="mobile_btn" className="mobile_btn" onClick={handleMobileBtnClick}>
        <i className="fa fa-bars"></i>
      </a>

      <div id="mobile-user-menu-icon" className="dropdown mobile-user-menu">
        <a
          onClick={handleMobileUserMenuClick}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v"></i>
        </a>
        <div
          id="mobile-user-menu-dropdown-list"
          className="dropdown-menu  dropdown-menu-right"
        >
          <a
            onClick={() => {
              console.log("route to user profile");
            }}
            href={"/profile"}
            className="dropdown-item"
          >
            My Profile
          </a>

          <a className="dropdown-item" onClick={accountService.logout}>
            Logout
          </a>
        </div>
      </div>

      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow main-drop">
          <a className="btn-block" data-toggle="dropdown" href={"/profile"}>
            <span className="fa fa-user-circle-o" />
            <span className="ml-2">{loggedInUserName}</span>
          </a>
        </li>
        <li className="nav-item dropdown has-arrow main-drop">
          <a className="btn-block" onClick={accountService.logout}>
            <span className=" fa fa-sign-out" />
            <span className="ml-2">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
