import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CautionModel from "./CautionModel";
import options from "../options";
import Sidebar from "./Sidebar";

function Dropdown({ details, setDetails, id, category, data, setData }) {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openModal, setOpenModal] = useState(false);
  // const [id, setId] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}>
          <svg
            style={{
              backgroundColor: "#5c6583",
              borderRadius: "6px",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 17C11.2287 17 10.3333 17.8954 10.3333 19C10.3333 20.1046 11.2287 21 12.3333 21C13.4378 21 14.3333 20.1046 14.3333 19C14.3333 17.8954 13.4378 17 12.3333 17Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 10C11.2287 10 10.3333 10.8954 10.3333 12C10.3333 13.1046 11.2287 14 12.3333 14C13.4378 14 14.3333 13.1046 14.3333 12C14.3333 10.8954 13.4378 10 12.3333 10Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 3C11.2287 3 10.3333 3.89543 10.3333 5C10.3333 6.10457 11.2287 7 12.3333 7C13.4378 7 14.3333 6.10457 14.3333 5C14.3333 3.89543 13.4378 3 12.3333 3Z"
              fill="white"
            />
          </svg>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: "20ch",
            },
          }}>
          {options.map((option, id) => {
            return (
              <MenuItem
                key={id}
                selected={option === "Pyxis"}
                onClick={() => {
                  // console.log(id);
                  // setId(id);
                  handleClose();
                  if (option.title === "View") setOpenSidebar((p) => !p);
                  if (option.title === "Delete") setOpenModal((p) => !p);
                }}
                style={{
                  gap: "10px",
                  color: option.title === "Delete" ? "red" : "black",
                }}>
                {option.icon} {option.title}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
      {openModal && (
        <CautionModel
          name={data[id].first}
          id={id}
          openModal={openModal}
          setOpenModal={setOpenModal}
          data={data}
          setData={setData}
          details={details}
          setDetails={setDetails}
        />
      )}
      {openSidebar && (
        <Sidebar
          id={id}
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          details={details}
          category={category}
        />
      )}
    </>
  );
}

export default Dropdown;
