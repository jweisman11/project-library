import { Typography } from "@mui/material";
import React from "react";

function Modal({ children }) {
  return (
    <React.Fragment>
      <Typography>{children}</Typography>
    </React.Fragment>
  );
}

export default Modal;
