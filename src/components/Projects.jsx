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
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import redux from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";
import hooks from '../images/react-hooks.png';
import beer from '../images/beer.png';

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
              href='https://github.com/fiixed/react-portfolio'
              rel='noreferrer'>
                GitHub
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://andrew-bell-react-portfolio.web.app/'
              rel='noreferrer'>
                Live Link
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
              href='https://github.com/fiixed/react-hooks-tac-toe'
              rel='noreferrer'>
                GitHub
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://react-hooks-tac-toe.web.app/'
              rel='noreferrer'>
                Live Link
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
              href='https://github.com/fiixed/react-redux-tac-toe'
              rel='noreferrer'>
                GitHub
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://react-redux-tac-toe-9.web.app/'
              rel='noreferrer'>
                Live Link
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
                  The challenge given here was to build a front-end project using only HMTL, CSS and JS.  Get Your Beer On is a web application for users looking for their next favorite brewery or beer.  Leverages Open Brewery DB, Open Beer Database, Google Geocoding API and the Google Maps JS API.  Contact me to be IP whitelisted to view the map components of this app.  
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://github.com/fiixed/Get-Your-Beer-On'
              rel='noreferrer'>
                GitHub
              </Button>
              <Button 
              size="small" 
              color="primary"
              target='_blank'
              href='https://get-your-beer-on.herokuapp.com/'
              rel='noreferrer'>
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
    )
}

export default Projects
