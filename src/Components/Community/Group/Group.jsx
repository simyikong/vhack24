import React from 'react';
import './Group.css'; // Import the CSS file for styling
import { groups } from '../../../dummyData'; // Import the groups data

function Group() { // Remove { groups } from the function parameters
  return (
    <div className="groupContainer">
      <div className="groupList">
        {groups.map((group, index) => (
          <div key={index} className="groupRow">
            <img className="groupCover" src={group.cover} alt={group.name} />
            <div className="groupDetails">
              <h2 className="groupName">{group.name}</h2>
              <p className="groupMemberCount">Members: {group.members}</p>
              <p className="groupCreated">Created: {group.created}</p>
              <p className="groupDescription">{group.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Group;
