import React from "react"

const Sidebar = ({ menuItems, styles }) => {
  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    backgroundColor: "#333",
    paddingTop: 40
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollasped ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollasped ? 0 : 10}px`,
    color: styles.white(0.9)
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollasped ? 0 : 10
  };

  const logoStyle ={
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold"
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>{styles.sidebarCollasped ? "A" : "App"}</div>
      {menuItems.map((item, i) =>(
        <div key={i} style={menuItemStyle}>
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollasped && item.text}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;