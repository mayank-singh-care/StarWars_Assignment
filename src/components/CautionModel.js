import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./CautionModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CautionModel(props) {
  return (
    <Modal
      open={props.openModal}
      onClose={() => props.setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style} className="deleteModal">
        <h1 id="modal-modal-title">Caution!</h1>
        <p id="modal-modal-description">
          {`Are you sure you want to Delete "${props.name}"`}
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            height: "44px",
            justifyContent: "space-between",
          }}>
          <button className="cancel" onClick={() => props.setOpenModal(false)}>
            Cancel
          </button>
          <button
            className="accept"
            onClick={() => {
              console.log(props.id);
              let p = props.data.filter(function (el, i) {
                return i !== props.id;
              });
              props.setData(p);
              p = props.details.filter(function (el, i) {
                return i !== props.id;
              });
              props.setDetails(p);
              props.setOpenModal(false);
            }}>
            Yes
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default CautionModel;
