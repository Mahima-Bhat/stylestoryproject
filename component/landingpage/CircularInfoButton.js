import { Avatar, Grid, IconButton } from "@mui/material";
import React from "react";

export default function CircularInfoButton({ imageList }) {
  return (
    <Grid container justifyContent="center" spacing={0}>
      {imageList.map((imageDetail,index) => {
        return (
          <Grid item xs={3} >
            <IconButton>
              <Avatar
                alt={imageDetail.Name}
                src={imageDetail.Image}
                sx={{ width: 300, height: 300 }}
                key={index}
              />
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
