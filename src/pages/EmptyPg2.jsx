import Communitybar from  "../Components/Community/Communitybar/Communitybar"
import CommunitySideBar from "../Components/Community/CommunitySideBar/CommunitySideBar"

export const EmptyPg2 = () => {
    return (
        <>
          <Communitybar />
          <div className="homeContainer">
            <CommunitySideBar />
          </div>
        </>
      );
    }
;