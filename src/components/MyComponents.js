import React, { useState } from 'react';

const MyComponent = () => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div>
      <h1>My Component</h1>
      {hovering ? (
        <img
          src="https://media.tenor.com/RLr5kNCUEk8AAAAd/poe-poe2.gif"
          alt="Path of Exile exile running montage"
          style={{  maxHeight: "50vh", maxWidth: "21vw" }}
          onMouseLeave={handleMouseLeave}
          autoPlay
        />
      ) : (
        <img
          src="https://cdn.akamai.steamstatic.com/steam/apps/238960/header.jpg?t=1680585439"
          alt="Path of Exile Crucible logo"
          style={{ maxHeight: "50vh", maxWidth: "21vw" }}
          onMouseEnter={handleMouseEnter}
        />
      )}
    </div>
  );
};

export default MyComponent;
