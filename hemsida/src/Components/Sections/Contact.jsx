import Login from "../../Login";
import "./Contact.css";

   

function Contact() {

   return (
      <div className="contactwrapper" id="contact"> 
      <div className="contact-both-sides">
         <div className="contact-left">

         <h1 className="contact-meh1">Contact Me</h1>
        <p className="contact-me">Name: Elvis Borgström 
        <br/><br /> Email: Elvis.borgstrom@gmail.com 
        <br/><br /> Phonenumber: +46 708701414 
        </p>


         </div>
         <div className="contact-right">
         <Login/>



         </div>
         
         </div>
         <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
        
     
      
   );
}


export default Contact;