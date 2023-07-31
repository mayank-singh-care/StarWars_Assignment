import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import "./Sidebar.css";

function Sidebar(props) {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    let obj = Object.entries(props.details[props.id]).filter(
      (el) => !Array.isArray(el[1])
    );
    console.log(obj);
    setDetail(obj);
  }, [props.id, props.details]);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.setOpenSidebar(false);
  };

  console.log(detail, props.id);

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={props.openSidebar}
        onClose={toggleDrawer()}>
        <Box
          className="box"
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}>
            <h2>{`${props.category.slice(0, -1)} Details`}</h2>
            <svg
              style={{ cursor: "pointer" }}
              onClick={toggleDrawer()}
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.91155 7.00032L14.1886 12.2822C14.579 12.6729 14.5787 13.306 14.188 13.6964C13.7973 14.0867 13.1641 14.0864 12.7738 13.6957L7.49628 8.41348L2.20658 13.6953C1.81577 14.0856 1.1826 14.0851 0.792368 13.6943C0.402134 13.3035 0.402605 12.6703 0.793419 12.2801L6.08271 6.99863L0.79565 1.70679C0.405302 1.31609 0.405588 0.682921 0.796289 0.292573C1.18699 -0.0977741 1.82016 -0.0974878 2.2105 0.293213L7.49797 5.58547L12.7739 0.317343C13.1648 -0.0728905 13.7979 -0.0724199 14.1881 0.318395C14.5784 0.709209 14.5779 1.34237 14.1871 1.73261L8.91155 7.00032Z"
                fill="white"
              />
            </svg>
          </div>
          <hr />
          <List>
            {detail &&
              detail.map((el, index) => (
                <div key={index} className="detail">
                  <h3 className="key">{el[0]}</h3>
                  <div className="value">{el[1]}</div>
                </div>
              ))}
          </List>
          <hr />
          <button className="close" onClick={toggleDrawer()}>
            Close
          </button>
        </Box>
      </Drawer>
    </div>
  );
}

export default Sidebar;
