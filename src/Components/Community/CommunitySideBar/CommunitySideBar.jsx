import React from 'react';
import "./CommunitySideBar.css";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import { RssFeed, Person, Group, Business, Bookmark } from "@material-ui/icons";

export default function CommunitySideBar() {
  const location = useLocation(); // Get current location

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className={`sidebarListItem ${location.pathname === '/explore' ? 'active' : ''}`}>
            <Link to="/explore" className="link">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Explore</span>
            </Link>
          </li>
          <li className={`sidebarListItem ${location.pathname === '/groups' ? 'active' : ''}`}>
            <Link to="/groups" className="link">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Group</span>
            </Link>
          </li>
          <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
            <Link to="/users" className="link">
              <Person className="sidebarIcon" />
              <span className="sidebarListItemText">Users</span>
            </Link>
          </li>
          <li className={`sidebarListItem ${location.pathname === '/companies' ? 'active' : ''}`}>
            <Link to="/companies" className="link">
              <Business className="sidebarIcon" />
              <span className="sidebarListItemText">Companies</span>
            </Link>
          </li>
          <li className={`sidebarListItem ${location.pathname === '/bookmarks' ? 'active' : ''}`}>
            <Link to="/bookmarks" className="link">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </Link>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
