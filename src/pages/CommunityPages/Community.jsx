import Communitybar from  "../../Components/Community/Communitybar/Communitybar"
import CommunitySideBar from "../../Components/Community/CommunitySideBar/CommunitySideBar"
import Feed from "../../Components/Community/Feed/Feed"
import CommunityRightBar from "../../Components/Community/CommunityRightBar/CommunityRightBar"
import "./Community.css"

export const Community = () => {
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
;