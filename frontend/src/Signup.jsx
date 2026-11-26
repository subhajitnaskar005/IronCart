import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';

const css = `
.page {
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.card {
  background: #111;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 32px;
  width: 360px;
}

.title {
  color: #fff;
  margin: 0 0 24px;
}

.input {
  width: 100%;
  padding: 12px;
  background: #000;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #ffd60a;
}

.button {
  width: 100%;
  padding: 12px;
  background: #ffd60a;
  color: #000;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.small-text {
  color: #aaa;
  font-size: 13px;
  text-align: center;
  margin-top: 16px;
}

.small-text a {
  color: #ffd60a;
  text-decoration: none;
}
`;


export default function Signup() {
  const notify = () => toast("Wow so easy!");
  let navigate = useNavigate()
  // one state object that stores all 4 field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({})


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSignUpData({...Signup,[e.target.name]:""})
  };


  // runs when you click the button
  const handleSubmit = async () => {
    let errorMsg = {}
    console.log(formData);
    if (formData.name.trim() === "") {
      errorMsg.name = "Enter your username"
    } else if (formData.email.trim() === "") {
      errorMsg.email = "Enter your email"
    } else if (formData.phone.trim() === "") {
      errorMsg.phone = "Enter your phone no"
    } else if (formData.password.trim() === "") {
      errorMsg.password = "Enter your password"
    } else{
          try{
      let response = await axios.post("http://localhost:8081/userData",formData)
      console.log(response.data);
      alert("User Data inserted!")
      navigate("/")
    }catch(err){
      console.log(err);
      alert("Something Went wrong!")
    }
    }
    setSignUpData(errorMsg)
    notify()
  };

  return (
    <div className="page">
       <style>{css}</style>
      <div style={{ color: "#fff", fontWeight: "600", fontSize: "30px" }}>IRON<span style={{ color: "yellow" }}>CART</span></div>
      <p style={{ paddingBottom: "20px", fontSize: "10px", opacity: ".85" }}>YOUR JOURNEY STARTS HERE</p>

      <div className="card">
        <h2 className="title">Sign <span style={{color:"yellow"}}>up</span></h2>

        <input
          className="input"
          type="text"
          name="name"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        {signUpData.name != "" && (<p style={{ color: "red", fontSize: "12px" }}>{signUpData.name}</p>)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Gmail"
          value={formData.email}
          onChange={handleChange}
        />
        {signUpData.email != "" && (<p style={{ color: "red", fontSize: "12px" }}>{signUpData.email}</p>)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          className="input"
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
        {signUpData.phone != "" && (<p style={{ color: "red", fontSize: "12px" }}>{signUpData.phone}</p>)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {signUpData.password != "" && (<p style={{ color: "red", fontSize: "12px" }}>{signUpData.password}</p>)}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button" onClick={handleSubmit}>
          Create account
        </button>
        <ToastContainer />
        <p className="small-text">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </div>
    </div>
  );
}