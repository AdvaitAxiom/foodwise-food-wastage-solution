import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Styles/CSS/Login.css'
import FoodShortage from "../assets/FoodHunger.jpg"


const OrgRegister = ({ setIsLogin, setIsOrg }) => {
  const [isShow, setIsShow] = useState(false)

  const handleShowPassword = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="loginInnerContainer">
      <div className="loginPageContainerWrapper">
        <div className="loginLeftContent">
          <img src={FoodShortage} alt="" />
        </div>
        <div className="loginRightContent">
          <div className="loginPageContent">
            <h1 className='loginHeader'>Organization Register</h1>
            <div className="loginEmailInput">
              <label htmlFor="name">Name</label>
              <div className="loginEmailInputField">
                <input type="text" id='name' />
              </div>
            </div>
            <div className="loginEmailInput">
              <label htmlFor="email">Email</label>
              <div className="loginEmailInputField">
                <input type="email" id='email' />
              </div>
            </div>
            <div className="loginEmailInput">
              <label htmlFor="phoneNo">PhoneNo</label>
              <div className="loginEmailInputField">
                <input type="number" id='phoneNo' />
              </div>
            </div>
            <div className="loginEmailInput">
              <label htmlFor="about">About</label>
              <div className="loginEmailInputField">
                <input type="text" id='about' />
              </div>
            </div>
            <div className="loginEmailInput">
              <label htmlFor="type">Type</label>
              <div className="loginEmailInputField">
                <input type="text" id='type' />
              </div>
            </div>
            <div className="loginEmailInput">
              <label htmlFor="address">Address</label>
              <div className="loginEmailInputField">
                <input type="text" id='address' />
              </div>
            </div>
            <div className="loginPasswordInput">
              <label htmlFor="password">Password</label>
              <div className="loginPasswordInputField">
                <input type={isShow ? "text" : "password"} name="" id="password" />
                {isShow ? <FaEye size={20} className='cursor-pointer' onClick={handleShowPassword} /> : <FaEyeSlash size={20} className='cursor-pointer' onClick={handleShowPassword} />}
              </div>
            </div>
            <div className="loginButton">
              <button>Register</button>
            </div>
          </div>
          <br />
          <div className='loginOrgLogin'>
            <button
              onClick={() => {
                setIsLogin(true)
                setIsOrg(false)
              }}
              className='loginOrgRegister'>User
              Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrgRegister
