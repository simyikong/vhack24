import React from 'react';
import Communitybar from  "../../Components/Community/Communitybar/Communitybar"
import CommunitySideBar from "../../Components/Community/CommunitySideBar/CommunitySideBar"
import Feed from "../../Components/Community/Feed/Feed"
import CommunityRightBar from "../../Components/Community/CommunityRightBar/CommunityRightBar"
import "./Community.css"

const Bookmarks = () => {
    return (
        <>
          <Communitybar />
          <div className="homeContainer">
            <CommunitySideBar />
            <Feed />
            <CommunityRightBar/>
          </div>
        </>
      );
    }

export default Bookmarks; // Export Bookmarks as the default export
