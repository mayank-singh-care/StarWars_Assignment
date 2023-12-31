import React from "react";
import "./Menu.css";

function Menu(props) {
  const menu = [
    "Films",
    "People",
    "Planets",
    "Species",
    "Starships",
    "Vehicles",
  ];

  return (
    <div className="menu">
      {menu.map((item, id) => (
        <button
          className="category"
          onClick={() => props.setCategory(item)}
          key={id}>
          <svg
            className="icons"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z"
              fill="white"
            />
          </svg>
          {item}
          <svg
            className="icons"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M12.7729 9.39798L7.14792 15.023C7.09565 15.0752 7.03361 15.1167 6.96533 15.145C6.89704 15.1733 6.82386 15.1878 6.74995 15.1878C6.67604 15.1878 6.60285 15.1733 6.53457 15.145C6.46628 15.1167 6.40424 15.0752 6.35198 15.023C6.29972 14.9707 6.25826 14.9087 6.22998 14.8404C6.20169 14.7721 6.18713 14.6989 6.18713 14.625C6.18713 14.5511 6.20169 14.4779 6.22998 14.4096C6.25826 14.3413 6.29972 14.2793 6.35198 14.227L11.5797 9.00001L6.35198 3.77298C6.24643 3.66743 6.18713 3.52427 6.18713 3.37501C6.18713 3.22574 6.24643 3.08259 6.35198 2.97704C6.45753 2.87149 6.60068 2.81219 6.74995 2.81219C6.89921 2.81219 7.04237 2.87149 7.14792 2.97704L12.7729 8.60204C12.8252 8.65428 12.8667 8.71632 12.895 8.7846C12.9233 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9233 9.14713 12.895 9.21541C12.8667 9.2837 12.8252 9.34574 12.7729 9.39798Z"
              fill="white"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default Menu;
