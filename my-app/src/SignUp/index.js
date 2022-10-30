import { Component } from "react";
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import "./index.css"

class Login extends Component{

    state={firstname:"",middlename:"",lastname:"",email:'',phonenumber:'',gender:'',date:"",caste:'',permanentresisdence:"",
currentresisdence:"",occupation:'',company:"",salary:'',experience:'',casteperference:'',ageprefernce:'',partnerperference:'',
profiles:[],exist:""}

    submit=event=>{
        event.preventDefault()
        const {firstname,middlename,lastname,email,phonenumber,gender,date,caste,permanentresisdence
            ,currentresisdence,occupation,company,salary,experience,casteperference,ageprefernce,partnerperference}=this.state
        
        const newProfile={
            id:uuidv4(),
            firstname,middlename,lastname,email,phonenumber,gender,date,caste,permanentresisdence,
            currentresisdence,occupation,company,salary,experience,casteperference,ageprefernce,partnerperference
        }
        this.setState(prevState=>({
            profiles:[...prevState.profiles,newProfile],
            firstname:'',middlename:'',lastname:'',email:'',phonenumber:"",gender:'',date:'',
            caste:'',permanentresisdence:'',currentresisdence:'',occupation:'',company:'',salary:'',experience:'',casteperference:'',
            ageprefernce:'',partnerperference:'',exist:''
        }))
        const dataLocal=JSON.parse(localStorage.getItem('data'))
        dataLocal.map(ele=>{
            if (ele.firstname===firstname){
                this.setState({exist:true})
            }
            else{
                this.setState({exist:false})
            }
        })

    }

    firstname=event=>{
        this.setState({firstname:event.target.value})
    }

    middlename=event=>{
        this.setState({middlename:event.target.value})
    }

   lastname=event=>{
    this.setState({lastname:event.target.value})
   }

   email=event=>{
    this.setState({email:event.target.value})

}

    phonenumber=event=>{  
        this.setState({phonenumber:event.target.value})
    }

    gender=event=>{  
        this.setState({gender:event.target.value})
    }

    date=event=>{
        this.setState({date:event.target.value})
    }

    caste=event=>{  
        this.setState({caste:event.target.value})
    }

    permanentresisdence=event=>{
        this.setState({permanentresisdence:event.target.value})

    }

    currentresisdence=event=>{  
        this.setState({currentresisdence:event.target.value})
    }

    occupation=event=>{
        this.setState({occupation:event.target.value})

    }

    company=event=>{  
        this.setState({company:event.target.value})
    }

    salary=event=>{  
        this.setState({salary:event.target.value})
    }

    experience=event=>{
        this.setState({experience:event.target.value})
    }

    casteperference=event=>{  
        this.setState({casteperference:event.target.value})
    }

    ageperference=event=>{  
        this.setState({ageprefernce:event.target.value})
    }

    partnerperference=event=>{
        this.setState({partnerperference:event.target.value})
    }

    render(){
        
        const {firstname,middlename,profiles,lastname,email,phonenumber,caste,permanentresisdence
            ,currentresisdence,exist,occupation,company,salary,experience,casteperference,ageprefernce,partnerperference}=this.state
            localStorage.setItem(firstname,JSON.stringify(profiles))
            console.log(exist)
            return(
                <div className="BackgroundSignUp">
                
                 <div className="signUpBackground">
                    <div>
                        <h1>Welcome to Matrimony</h1>
                    <p className="signUpPara">Create a account or <Link to="/login">Login in</Link></p>
                    </div>
                    
             <form className="formEleSignUp" onSubmit={this.submit}>
                <div className="signUpWrap">
                     <div className="wrapEle">
                    <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">First Name</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={firstname} onChange={this.firstname} placeholder="Enter Your First Name" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Middle Name</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
                     <input value={middlename} onChange={this.middlename} placeholder="Enter Your Middle Name" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Last Name</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
                     <input value={lastname} onChange={this.lastname} placeholder="Enter Your Last Name" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
        
 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Email</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={email} onChange={this.email} placeholder="Enter Your Email" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Phone Number</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={phonenumber} onChange={this.phonenumber} placeholder="Enter Your Phone Number" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                 <label className="labelEle" forHtml="gender">Choose Your Gender</label>
                 <div className="divEle1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"/>
                        </svg>
                        <select onChange={this.gender} name="gender" id="gender">
                            <option selected>Choose a Option</option>
                            <option key="male" value="male">Male</option>
                            <option key="female" value="female">Female</option>
                        </select>
                 </div> 
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>

                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Date Of Birth</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
                     <input onChange={this.date} id="date" type="date"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Caste</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={caste} onChange={this.caste} placeholder="Enter Your Caste" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Permanent Residence</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
                     <textarea value={permanentresisdence} onChange={this.permanentresisdence} placeholder="Enter Your Permanent Residence" className="textArea" rows="2" cols="50" name="comment" form="usrform">
</textarea>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 
                </div>
                 
                 <div>
                        <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Current Residence</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
                     <textarea value={currentresisdence} onChange={this.currentresisdence} placeholder="Enter Your Current Residence" className="textArea" rows="4" cols="50" name="comment" form="usrform">
</textarea>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>


                        <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Occupation</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={occupation} onChange={this.occupation} placeholder="Enter Your Occupation" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Working Company or Organisation</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
                     <input value={company} onChange={this.company} placeholder="Enter Your Working Company or Organisation" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Net Salary/CTC</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
                     <input value={salary} onChange={this.salary} placeholder="Enter Your Net Salary/CTC" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Total Experience</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
                     <input value={experience} onChange={this.experience} placeholder="Enter Your Total Experience" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>
                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Caste Preference</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={casteperference} onChange={this.casteperference} placeholder="Any Caste Preference" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>

                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Age Preference</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={ageprefernce} onChange={this.ageperference} placeholder="Any Age Preference" id="Uname" type="text"/>
                     </div>
                 </div>
                 <hr Style="width:80%;text-align:left;margin-left:15"/>

                 <div className="divBack">
                     <lable className="labelEle" forHtml="Uname">Partner Salary Preference</lable>
                     <div className="divEle1">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                         <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                     </svg>
                     <input value={partnerperference} onChange={this.partnerperference} placeholder="Any Partner Salary Preference" id="Uname" type="text"/>
                     </div>
                     </div>
               
                 <hr  Style="width:80%;text-align:left;margin-left:15"/>
                 </div>
                

                </div>
               
                          <div className="buttonEle">
                      <button className="butEle" type="submit">
                        {exist?"SIGN UP":<Link className="link" to="/home">SIGN UP</Link>}
                 </button>
                 </div>
               
             </form> 
             <p>{exist?"User Already Exists":""}</p>
         </div>
            </div>
            
           
        )
    }
}

  export default Login;