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
      color: "tomato"
    },
    subtitle: {
      color: "tan",
      marginBottom: "3rem"
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1
    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Andrew Bell" />
            </Grid>
            <Typography className={classes.title} variant="h3">
                <Typed
                    strings={['Andrew Bell']}
                    typeSpeed={40}
                    cursorChar='_'
                />
                </Typography>
                <br/>
                <br/>
                <Typography className={classes.subtitle} variant="h4">
                <Typed
                strings={[
                    'Full Stack Development',
                    'MERN Stack',
                    'Mobile Development',
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    cursorChar='_'
                    loop />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                strings={[
                    'Pugs!',
                    'Cricket', 
                    'Travel']}
                    typeSpeed={40}
                    backSpeed={60}
                    cursorChar='_'
                    loop />
                
            </Typography>
        </Box>
    )
}

export default Header
