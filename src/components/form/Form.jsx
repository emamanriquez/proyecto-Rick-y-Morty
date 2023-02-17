import React from 'react';
import styled from "./Form.module.css";


export default function Form({login}) {
const [userData, setUserData] = React.useState({
  username: "",
  password: "",
});
const handleInputChange = (e) => {
  setUserData({...userData, [e.target.name]: e.target.value}
  //setErrors({validate})
    )}
  
const handleSubmit =(e) => {
login(userData);

};  

 const [errors, setErrors] = React.useState({
  username: "",
  password: "",
 });   
 
return (
<div>
  <form onSubmit ={handleSubmit}>
  <label className={styled.username} htmlFor="username">Username:</label>
  <input className={styled.inputusername} type="text" id="username" name="username" value={userData.username} onChange={handleInputChange}/>

  <label className={styled.password} htmlFor="password">Password:</label>
  <input className={styled.inputpassword} type="password" id="password" name="password" value={userData.password} onChange={handleInputChange}/>

  <button className={styled.botonlogin}type="submit">Login</button>
</form>
</div>
)
};

