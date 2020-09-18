import React from "react";
import "./style.less";

export default function SideBar({ sideBarItemList }) {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title mb-3">
              <span className="fa fa-cogs pr-2 font-weight-bold" />
              <span className="ml-2">Administration Settings</span>
            </li>
            {sideBarItemList &&
              sideBarItemList.map((sideBarItem, index) => {
                return (
                  <li key={index} className="active mb-2">
                    <a href={sideBarItem.path}>
                      <i className={sideBarItem.iconClass} />
                      <span className="ml-2">{sideBarItem.name}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
