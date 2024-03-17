import React, { useState } from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
import { Posts } from '../../../dummyData.js';

export default function Feed() {
  const [feedType, setFeedType] = useState('newest'); // Default feed type is 'newest'

  const handleFeedTypeChange = (type) => {
    setFeedType(type);
  };

  // Filter posts based on selected feed type
  const filteredPosts = feedType === 'newest' ? Posts : /* Add trending posts filtering logic here */ [];

  return (
    <div className="feed">
      <div className="feedControls">
        <button className={feedType === 'newest' ? 'active' : ''} onClick={() => handleFeedTypeChange('newest')}>Newest</button>
        <button className={feedType === 'trending' ? 'active' : ''} onClick={() => handleFeedTypeChange('trending')}>Trending</button>
      </div>
      <div className="feedWrapper">
        <Share />
        {filteredPosts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
