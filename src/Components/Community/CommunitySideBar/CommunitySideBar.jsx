import "./CommunitySideBar.css";
import {
  RssFeed,
  Person,
  Group,
  Business,
  Bookmark
} from "@material-ui/icons";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">Users</span>
          </li>
          <li className="sidebarListItem">
          <Business className="sidebarIcon" />
            <span className="sidebarListItemText">Companies</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}