import React,{useState,useEffect,useRef} from 'react';
import Contributions from './Contributions'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import CommitActivity from './CommitActivity'
import Repos from './Repos'
import Following from './Following'
import TopUserLanguages from './TopUserLanguages'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import GhPolyglot from 'gh-polyglot';
import {gsap} from 'gsap';
import '../App.css';


const useStyles = makeStyles(theme => ({
   

  
  }))



function UserProfile(props) {
    const classes = useStyles();

    let topUserLangRef = useRef(null)

    let contributionRef = useRef(null)

    let activity = useRef(null)

    let profImage = useRef(null)

    let profInfo = useRef(null)

let githubUserName = props.location.state.username;
const [user,setUser] = useState({})
const [languagesData,setLanguagesData] = useState([])




console.log(user,"user")
useEffect(()=>{

    axios
    .get(`https://api.github.com/users/${githubUserName}`)
    .then((response) => {
      setUser(response.data);
    })

    .catch((err) => {
      console.log(err);
    });


    const me = new GhPolyglot(`${githubUserName}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error('Error:', err);
      }
      setLanguagesData(stats);
    });

    gsap.from(topUserLangRef.current, {
      autoAlpha: 0,
      ease: 'none',
      y:-600,
      x:600,
      delay: 1
  });

  gsap.from(contributionRef.current, {
    autoAlpha: 0,
    ease: 'none',
    y:600,
    delay: 1
});

  gsap.from(activity.current, {
    autoAlpha: 0,
    ease: 'none',
    y:-600,
    x:-600,
    delay: 1
  });

  gsap.from(profImage.current, {
    autoAlpha: 0,
    ease: 'none',
    y:600,
    delay: 1
  });

  gsap.from(profInfo.current, {
    autoAlpha: 0,
    ease: 'none',
    y:-600,
    delay: 1
  });



},[githubUserName])


  return (
<>
  <div className="main">



    <div className="middle">


                <div className="main">
                        <section  > 

                              <div ref={topUserLangRef}>

                              <TopUserLanguages  username={githubUserName} user={user}  languagesData= {languagesData}/>

                              </div>


                            <div >

                            <Repos  username={githubUserName} user={user}/>
                              
                            </div>

                        </section>
                </div>



                <div>

                      <section>
                        <div ref={activity}>
                        <CommitActivity  username={githubUserName} user={user} />

                          </div>
                        </section>

                      <div className = "middlerowright">
                      <section>
                          <div ref={profImage}>
                          <ProfileImage username={githubUserName} user={user}/>

                          </div>

                          <div ref={profInfo}>
                          <ProfileInfo username={githubUserName} user={user} />

                            </div>

                        </section>


                        <section>
                            <Following username={githubUserName} user={user} />
                        </section >

                      </div>
                       

                </div>
                


      
      </div>


            <Contributions  ref={contributionRef} username={githubUserName} user={user} />

  
 
  </div>
   
  


     
</>
  );
}

export default UserProfile;