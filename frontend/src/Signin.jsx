import axios, { Axios } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const css = `
.page {
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  flex-direction:column;
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
  text-align:center;
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


export default function Signin() {
    let navigate = useNavigate()
    // one state object that stores both field values
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({...error, [e.target.name] : ""})
    };


    const handleSubmit = async () => {
        let er = {}
        if (formData.password.trim() === "") {
            er.password = "Enter your password"
        }else if(formData.email.trim() === ""){
            er.username = "Enter your email id"
        }else{
            try{
                let response = await axios.post("http://localhost:8081/userData/signin",formData)
                console.log(response);
                if(response.data){
                    navigate("/ironcart")
                    alert("User Login Sucessfull")
                }else{
                    alert("User Doesn't Exists")
                }
            }catch(err){
                console.log(err);
                alert("Something Went Wrong")
            }
        }
        setError(er)
    };

    return (
        <div className="page">
            <div style={{ color: "#fff", fontWeight: "600", fontSize: "30px" }}>IRON<span style={{ color: "yellow" }}>CART</span></div>
            <p style={{ paddingBottom: "20px", fontSize: "10px", opacity: ".85" }}>YOUR JOURNEY STARTS HERE</p>
            <style>{css}</style>
            <div className="card">
                <h2 className="title">Sign <span style={{ color: "yellow" }}>in</span></h2>
                <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="example@123"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.email != "" && (<p style={{color:"red", fontSize:"12px"}}>{error.email}</p>)}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {error.password != "" && (<p style={{color:"red", fontSize:"12px"}}>{error.password}</p>)}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="button" onClick={handleSubmit}>
                    Sign in
                </button>

                <p className="small-text">
                    New here? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
}