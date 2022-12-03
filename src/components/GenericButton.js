import { Button } from "@mui/material";
import React from "react";
import { defaultHexColor } from "../globals";

function GenericButton({ text , onClick}) {
  return (
    <Button
      sx={{
        textTransform: "none",
        border: 'none',
        minWidth: 120,
        borderRadius: "15px",
        boxShadow: 3,
        background: defaultHexColor,
        "&:hover": {
          color: defaultHexColor,
          border:'none',
          fontWeight: "bold",
          background: "#FFFFFF",
          outline: "1px solid " + defaultHexColor,
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default GenericButton;
