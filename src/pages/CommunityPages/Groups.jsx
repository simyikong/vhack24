import React from 'react';
import Communitybar from  "../../Components/Community/Communitybar/Communitybar"
import CommunitySideBar from "../../Components/Community/CommunitySideBar/CommunitySideBar"
import Group from "../../Components/Community/Group/Group"
import CommunityRightBar from "../../Components/Community/CommunityRightBar/CommunityRightBar"
import "./Community.css"

const Groups = () => {
    return (
        <>
          <Communitybar />
          <div className="homeContainer">
            <CommunitySideBar />
            <Group />
            <CommunityRightBar/>
          </div>
        </>
      );
    }

export default Groups; // Export Bookmarks as the default export
