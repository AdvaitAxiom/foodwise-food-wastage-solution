import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../Styles/CSS/Login.css'
import FoodShortage from "../assets/FoodShortage.jpg"

const Register = ({ setIsLogin, setIsOrg }) => {
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
                        <h1 className='loginHeader'>Register</h1>
                        <div className="loginEmailInput">
                            <label htmlFor="username">Username</label>
                            <div className="loginEmailInputField">
                                <input type="text" id='username' />
                            </div>
                        </div>
                        <div className="loginPasswordInput">
                            <label htmlFor="password">Password</label>
                            <div className="loginPasswordInputField">
                                <input type={isShow ? "text" : "password"} name="" id="password" />
                                {isShow ? <FaEye size={20} className='cursor-pointer' onClick={handleShowPassword} /> : <FaEyeSlash size={20} className='cursor-pointer' onClick={handleShowPassword} />}
                            </div>
                        </div>
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
                        <div className="loginButton">
                            <button>Register</button>
                        </div>
                        <div className='loginCreateNew'>
                            <p>Already Have an account?
                                <span
                                    onClick={() => {
                                        setIsLogin(true)
                                        setIsOrg(false)
                                    }}
                                >Login Now</span></p>
                        </div>
                    </div>
                    <div className='loginOrgLogin'>
                        <button
                            onClick={() => {
                                setIsLogin(false)
                                setIsOrg(true)
                            }}
                            className='loginOrgRegister'>Organization
                            Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
