import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import EventIcon from '@material-ui/icons/Event';
import GitHubIcon from '@material-ui/icons/GitHub';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles(theme => ({
   
    paper: {
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 0, 0),
      outline: 'none',
      margin: '1%',
      display:"flex",
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 16px 19px rgba(0,0,0,0.2), 0 15px 15px rgba(0,0,0,0.2)",
      '&:hover': {
        boxShadow: "0 2px 4px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22)"
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 0, 0),
        width: '100%',
        height: '100%',
      },
    },

    profileImage:{

        width:'40%',
        height:'40%',
        margin: "5px auto"
    },
  

    section:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
        

    }
  
  }))


function CommitActivityCard(props) {
    
    const classes = useStyles();

  
      const project = () => {
        console.log(props.feedie.type,"type")

        switch(props.feedie.type) {
          case "PushEvent":   
          return (

              <div style={{width:'100%',backgroundColor:"red"}}>
              <p>HGEllo</p>
            </div>

          );
          case "PullRequestEvent":   
          return (
          <div style={{width:'100%',backgroundColor:"red"}}>
          
          <p>HGEllo</p>
            </div>

          );
          case "PullRequestReviewEvent ": 
          return(
            <div style={{width:'100%',backgroundColor:"red"}}>
            <p>HGEllo</p>
            </div>

          );
          case "CreateEvent":  
          return (
           <div style={{width:'100%',backgroundColor:"red"}}>
           <p>HGEllo</p>
            </div>

          );
  
          default:      
          return (
            <div style={{width:'100%',backgroundColor:"red"}}>
             <p>HGEllo</p>
            </div>


          )
        }
      }

    



  return (

  <>
    <Card className={classes.paper} style={{ backgroundColor:"mintcream",  maxWidth: "95%",margin:"10px"}}  onClick={event =>  window.location.href=`${props.follow.html_url}`}>  


      { project() }
      
    </Card>

   


  </>
  );
}

export default CommitActivityCard;