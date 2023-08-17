
import {React,useState} from 'react'
import {Row,Col} from "react-bootstrap"
import { useSelector } from "react-redux";
import "./ContactPage.css"

const ContactPage = () => {
  const user = useSelector((state) => state.user);
  const [textfield,settextfield]=useState({name:"",email:"",message: ""});
  const setvalue=(e)=>{
    const name=e.target.name;
    settextfield({...textfield,[name]:e.target.value});
  }
const Contactform=async(e)=>{
  e.preventDefault();
  const [name,email,message]=[textfield.name,textfield.email,textfield.message];
  const res=await fetch("http://localhost:5001/users/contact",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,message
    })
  });
  const data=await res.json();
  if(!data)
  {
    console.log("message not send");
  }
  else
  {
    alert("Message Send");
    settextfield({...textfield,message: ""});
  }
}
  return (
   <>
  {!user && <div className="alert alert-danger">Please login for Contact Page</div>}

  {user && <div className='contact'>
      <Row>
        <Col md={6}>
        <div className='Main_form'>
         <form method="POST" className="form_main">
          <h2>Send Us Message!!</h2>
          <div className='form'>
            <input type="text" placeholder='Name' value={user.name}/>
              <input type="email" placeholder='Email' required value={user.email}/>
                <textarea className="text_area" type="text" placeholder='Message' name="message" value={textfield.message} onChange={setvalue}/>
              <div className='btn_class'>
                 <button type="Submit" className='btn' onClick={Contactform}>Send</button>
              </div>
           
                 
          
             

          </div>
         </form>
         </div>
        </Col>
           <Col md={6}>
           <div className='left_side'>
            <h1>Contact Us</h1>
            <br/>
            <h5>We're open for any Suggestion or just to Connect with Social Media</h5>
              <br/>
            <div className='Social_media'>
              <p><a href="http://localhost:3000"><i className=" i_size fa-brands fa-instagram"></i></a>Instagram<span style={{color:"#0097e6"}}> mohdkaif8763</span></p>
               <p><a href="http://localhost:3000"><i className="i_size fa-solid fa-envelope"></i></a>Email<span style={{color:"#0097e6"}}>mohdkaif30062002@gmail.com</span></p>
                <p><a href="http://localhost:3000"><i className="i_size fa-solid fa-phone"></i></a>Phone <span style={{color:"#0097e6"}}>+919616477002</span></p>
                 <p><a href="http://localhost:3000"><i className="i_size fa-brands fa-twitter"></i></a>Twitter<span style={{color:"#0097e6"}}>Kaif@twittwer</span></p>
                  <p><a href="http://localhost:3000"><i className="i_size fa-solid fa-location-dot"></i></a>Website<span style={{color:"#0097e6"}}>https:/Kaif_Chat_App/netlify.com</span></p>
            </div>
            </div>
           </Col>

      </Row>
      <h5 className='footer'>ThankYou for Contacting Us we will contact soon!!</h5>
      </div>}
   
      </>
   
  )
}

export default ContactPage