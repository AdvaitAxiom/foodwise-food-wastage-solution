import React from 'react'
import "../Styles/CSS/home.css"
import NavBar from '../Components/NavBar'
import HungerPlate from "../assets/HungerPlate.png"

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="navContainer">
                <NavBar />
            </div>
            <div className="homeContent">
                <div className="homeTopPart">
                    <div className="homeTopText">
                        <div className="homeTitleCard">
                            Welcome to FoodWise🍊
                        </div>
                        <div className="homeMainText">
                            Simplify Your Food, <br />Cut Waste, and<br /> Live Sustainably.
                        </div>
                        <div className="homeSmallText">
                            Manage meals, track expirations, discover recipes, and donate with ease.
                            Join us in reducing waste and supporting a sustainable future. Start today!
                        </div>
                    </div>
                    <div className="homeTopImage">
                        <img src={HungerPlate} alt="" />
                    </div>
                </div>
                <div className="callToActionContainer">
                    <div className="callToAction">
                        Meal Planning
                    </div>
                    <div className="callToAction">
                        Expiration Tracker
                    </div>
                    <div className="callToAction">
                        Recipe Suggestions
                    </div>
                    <div className="callToAction">
                        Donation Coordination
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
