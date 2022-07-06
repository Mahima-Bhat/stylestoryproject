import React from "react";
import {  withStyles } from "@mui/styles";
import { Menu } from "@mui/material";


export const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 6px #00000033",   
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));