import { Paper,Grid } from '@mui/material';
import React from 'react';
import { circularButtonData } from '../../data/circularButtonData';
import CircularInfoButton from './CircularInfoButton';

export default function CircularButtonSection(){

    return (
        <Paper elevation={0}  style={{backgroundColor:"#ffe680"}}>
           <Grid container spacing={1} direction="row" >
              {
                circularButtonData.map((detail) => {
                   return <CircularInfoButton imageList={detail.Content}/>
                })
              }
           
           </Grid>
        </Paper>
    )
}