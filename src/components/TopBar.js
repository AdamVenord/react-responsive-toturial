import React from 'react';
import { styles } from 'ansi-colors';

const TopBar = ({ style }) => {
  const topBarStyle = {
    position: 'fixed',
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarSTyle}> 
      <span>{`😺️`}</span>
        App
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;