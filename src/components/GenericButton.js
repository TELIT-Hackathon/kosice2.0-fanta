import { Button } from "@mui/material";
import React from "react";
import { defaultHexColor } from "../globals";

function GenericButton({ text }) {
  return (
    <Button
      sx={{
        textTransform: "none",
        minWidth: 120,
        borderRadius: "15px",
        boxShadow: 3,
        background: defaultHexColor,
        "&:hover": {
          color: defaultHexColor,
          fontWeight: "bold",
          background: "#FFFFFF",
          outline: "1px solid " + defaultHexColor,
        },
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
}

export default GenericButton;
