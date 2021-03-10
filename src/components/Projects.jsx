import React from 'react'
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
  } from "@material-ui/core";
import ecommerce from "../images/ecommerce.png";
import agview from "../images/agview.png";
import redux from "../images/react-redux.jpg";
import davis from "../images/davis_vision.png";
import hooks from '../images/react-hooks.png';
import beer from '../images/beer.png';
import austin from '../images/invest_austin.png';
import kickoff from '../images/sirius_kickoff.png';
import madness from '../images/sirius_madness.png';
import tram from '../images/tram_tracker.png';
import video from '../images/video_diary.png';

const useStyles = makeStyles({
    mainContainer: {
      background: "#233",
      height: "100%",
    },
    cardContainer: {
      maxWidth: 345,
      margin: "5rem auto",
    },
  });

const Projects = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
      {/* Capstone */}
      <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Capstone"
                height="140"
                image={ecommerce}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Full Stack Ecommerce with Stripe
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                E-commerce admin ability to manage categories, sub-categories, products, images, ratings, orders, coupons  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                User ability to search and filter products, add to cart, payment, pdf invoice
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Capstone project built with React, Redux, Ant, Node, Express, Cloudinary, Stripe, Firebase and MongoDB
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='http://143.110.229.251/'
              rel='noreferrer'>
                Live Link
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/react-whitelabel-ecommerce-front'
              rel='noreferrer'>
                GitHub Frontend
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/react-whitelabel-ecommerce-back'
              rel='noreferrer'>
                GitHub Backend
              </Button>
              
              {/* <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://andrew-bell-react-portfolio.web.app/'
              rel='noreferrer'>
                Live Link 
              </Button> */}
            </CardActions>
          </Card>
        </Grid>
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={hooks}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  This Portfolio!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This Portfolio site was built from scratch using React, Hooks, Material UI, Particles JS, Email JS and Typed JS  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://andrew-bell-react-portfolio.web.app/'
              rel='noreferrer'>
                Live Link
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/react-portfolio'
              rel='noreferrer'>
                GitHub
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={hooks}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  React Hooks Tac Toe
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  As a mini project to highlight my React skills I built two versions of the same tic tac toe game, one using React & Hooks, and another using React & Redux for state management
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://react-hooks-tac-toe.web.app/'
              rel='noreferrer'>
                Live Link
              </Button>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/react-hooks-tac-toe'
              rel='noreferrer'>
                GitHub
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={redux}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                React Hooks Tac Toe
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                As a mini project to highlight my React skills I built two versions of the same tic tac toe game, one using React & Hooks, and another using React & Redux for state management
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://react-redux-tac-toe-9.web.app/'
              rel='noreferrer'>
                Live Link
              </Button>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/react-redux-tac-toe'
              rel='noreferrer'>
                GitHub
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={beer}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Get Your Beer On
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  The challenge given here was to build a front-end project using only HMTL, CSS and JS      
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Get Your Beer On is a web application for users looking for their next favorite brewery or beer 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Leverages Open Brewery DB, Open Beer Database, Google Geocoding API and the Google Maps JS API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Contact me to be IP whitelisted to view the map components of this app 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://get-your-beer-on.herokuapp.com/'
              rel='noreferrer'>
                Live Link
              </Button>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/Get-Your-Beer-On'
              rel='noreferrer'>
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 5 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={video}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Video Diary
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Record your personal thoughts and daily life  
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using Flutter 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/Video-Diary-Flutter'
              rel='noreferrer'>
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 6 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={austin}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Invest Austin
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Gain a sneak-peek into Austin's future, as it extends the current landscape using in-context AR 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using Unity/C#/Google Tango
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Click on the link to watch me present the app at the global Unite 17 conference
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://www.youtube.com/watch?v=QDQsg1hPa38'
              rel='noreferrer'>
                YouTube
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 7 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={agview}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Agview
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Easy-to-use interface for digitally entering animal health certificate data for all species
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using Ionic 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://apps.apple.com/tn/app/agview/id1401972444'
              rel='noreferrer'>
                App Store
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 8 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={kickoff}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sirius Kickoff
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                The Sirius Kickoff conference mobile companion application is for the Sirius Kickoff conference
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using React Native 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.sirius.kickoff2020&hl=en_US&gl=US'
              rel='noreferrer'>
                App Store
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 9 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={madness}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Sirius Madness
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                The Sirius Madness conference mobile companion application is for the Sirius Madness conference
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using React Native 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://apps.apple.com/in/app/sirius-madness/id1090833498'
              rel='noreferrer'>
                App Store
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 10 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={davis}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Davis Vision
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                The Davis Vision mobile app has a number of industry-leading features to manage your vision care benefit while you are on-the-go
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using Ionic 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://davisvision.com/app/'
              rel='noreferrer'>
                Home Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 11 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={tram}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Tram Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                tramTRACKER – Melbourne’s official tram app for real-time tram arrival information
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" display="block">
                Built using Android/iOS 
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.yarratrams.tramtracker&hl=en_US'
              rel='noreferrer'>
                App Store
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Projects
