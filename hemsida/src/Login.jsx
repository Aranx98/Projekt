import { useState } from "react";
import "./Login.css";

 function Login () {
        const [isSubmitted, setIsSubmitted]=useState(false);
        const [text, setText] = useState('');


        function handleSubmit(e) {
            e.preventDefault(); //Detta används för att hindra att koden tror att meddelandet ska skickas till en server. 
            console.log(e.target.text.value);
            setIsSubmitted(true);
        }

        return (
            <div>
                <h1 className="login-meh1">Chat with me here</h1>
            
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                <input
                name="text"
                type="text"
                value={text}
                placeholder="Write your massage here"
                onChange={(e) => {
                    setText(e.target.value);
                }}
                />

                <button type="submit">Submit</button>
                </form>
            ): (
                <p>Thank you for your massage</p>
            )}
            </div>
        );

    }
  

export default Login;
