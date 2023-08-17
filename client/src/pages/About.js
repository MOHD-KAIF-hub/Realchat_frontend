import React from 'react'
import {Row,Col} from "react-bootstrap" ;
import profile from "../assets/software.jpg"
import { useSelector } from "react-redux";
import "./About.css"

const About = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {!user && <div className="alert alert-danger">Please login for About Page</div>}
     {user &&   <div className='About'>
        <Row>
            <Col md={6}>
                <img src={profile} alt="profile" className="set_profile"/>
            </Col>
            <Col md={6}>
                       <div className='left_side'>
                        <h4>Welcome to Real Time Chat App!!</h4>
                        <h1 id="text"> I Am A <span class="txt_clr" style={{color:"#0097e6"}}>Former TA,MERN Developer </span> and Youtuber</h1>
                        <a href="https://www.linkedin.com/in/mohd-kaif-9381b7228/"><button class="btn">About Me</button></a>
                    </div>
            </Col>
        </Row>
       
         <footer>
        <p>Created with love 💖💖By Mohd Kaif </p>
    </footer>
    </div> }
  
    </>
  )
}

export default About