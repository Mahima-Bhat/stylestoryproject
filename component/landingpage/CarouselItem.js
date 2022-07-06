import {
  Card,
  Grid,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import React from "react";

function CarouselItem({offerData}) {
  const renderViewOffer = () => {
    return (
      <Grid item xs={4}>
        <CardContent className="Content" style={{background:"#ffcc66",height:"25em"}}>
          <Typography className="Title" style={{color:"white"}}>{offerData.Name}</Typography>

          <Typography className="Caption" style={{color:"white"}}>{offerData.Caption}</Typography>

          <Link className="ViewButton" href={`/${offerData.id}`}>
           View now
          </Link>
        </CardContent>
      </Grid>
    );
  };

  const renderImages = () => {
    return offerData?.Items?.map((itemData) => (
      <Grid item xs={4} key={itemData.Name}>
        <CardMedia
          className="Media"
          image={itemData.Image}
          title={itemData.Name}
          style={{height:"25em"}}
        >
          <Typography className="MediaCaption" style={{color:"white",background:"#ffffff00" }}>{itemData.Name}</Typography>
        </CardMedia>
      </Grid>
    ));
  };

  return (
    <Card raised style={{height:"25em"}}>
      <Grid container spacing={0}>
        {renderViewOffer()}
        {renderImages()}
      </Grid>
    </Card>
  );
}
export default CarouselItem;
