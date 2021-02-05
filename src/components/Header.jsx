import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box

} from '@material-ui/core'
import Typed from 'react-typed'
import avatar from '../images/me.jpg'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: theme.spacing(1)
    },
    title: {
      color: "tomato",
      marginTop: "2rem",
    },
    subtitle: {
      color: "tan",
      marginBottom: "3rem"
    },
    skills: {
      color: "#EF3100",
    },
    typedContainer: {
      position: "absolute",
      top: "55%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
      padding: "1%"
    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Andrew Bell" />
            </Grid>
            
           
            <Typography className={classes.title} variant="h2">
                <Typed
                    strings={['Andrew Bell']}
                    typeSpeed={40}
                    cursorChar='_'
                />
                </Typography>
                <br/>
                <br/>
                <br/>
                <Typography className={classes.subtitle} variant="h4">
                <Typed
                strings={[
                    'Full Stack Developer (MERN)',
                    'Mobile Developer (Hybrid + Native)',
                    'Technical PM'
                    ]}
                    typeSpeed={80}
                    backSpeed={60}
                    cursorChar='_'
                    loop />
            </Typography>
            
            <Typography className={classes.skills} variant="h6">
                <Typed
                    strings={['JavaScript, Node, React, Hooks, Redux, React Native, Express, EJS, REST, MongoDB, Mongoose, SQL, Firebase, Heroku, Flutter, Dart, HTML, CSS, Bootstrap, Flexbox, Unity, C#, AR/VR, Android, Java, iOS, Swift']}
                    typeSpeed={40}
                    cursorChar='_'
                />
                </Typography>
                <br />
                <br />
                <br />
                <Typography className={classes.subtitle} variant="h5">
                <Typed
                strings={[
                    'Pugs! (ask me about George and Queenie)',
                    'Travel! (\"been around the world and ay yi yi...\")',
                    'Cricket! (the sport, I\'m Australian...)'
                    ]}
                    typeSpeed={80}
                    backSpeed={60}
                    cursorChar='_'
                    loop />
                
            </Typography>
            

        </Box>
    )
}

export default Header
