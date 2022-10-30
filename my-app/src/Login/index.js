import { Component } from "react";
import { Link } from 'react-router-dom'
import "./index.css"

class Login extends Component{


    submit=event=>{
        event.preventDefault()
        const data=JSON.parse(localStorage.getItem("data"))
        console.log(data)
    }
    render(){
        
        
        return(
                <div className="BackgroundLogin">
                <div className="iconText">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="icon bi bi-postcard-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm6 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622ZM2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
</svg>
                <h1>Matrimony</h1>
                </div>
                 <div className="loginBackground">
             <form className="formEle" onSubmit={this.submit}>
                 <h1 className="headEle">Login </h1>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Username</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input placeholder="Type Your Username" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                      <lable className="labelEle" forHtml="pass">Password</lable>
                      <div className="divEle1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                         <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                         </svg>
                         <input id="pass" type="password" placeholder="Type Your Password"/>
                      </div>
                 
                 </div>
                 <hr  Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="buttonEle">
                      <button className="butEle" type="submit">
                     LOGIN
                 </button>
                 </div>
             </form> 
             <p className="paraEle">Not a member? 
                 <Link to="/signup">
                 <button className="buttonSignUp" type="button">Sign up Now</button>
                 </Link></p>
         </div>
            </div>
            
           
        )
    }
}

  export default Login;