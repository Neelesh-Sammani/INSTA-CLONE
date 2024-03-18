import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Home.css';
import SideNavbar from './SideNavbar';
import Carousel from './Carousel';
import Suggestions from './Suggestions';
import Posts from './Posts';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={2.5}>
          <SideNavbar />
        </Grid>
        <Grid item xs={4} md={6.5} style={{marginTop:'0px'}}>
            <Carousel />
            <Posts />
        </Grid>
        <Grid item xs={4} md={3} style={{marginTop: '40px'}}>
          <Suggestions />
        </Grid>
      </Grid>
    </Box>
  );
}