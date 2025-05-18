import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <span>Gemini</span>
        <img src={assets.user_icon} alt=''/>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a good song to listen</p>
            <img src={assets.compass_icon} alt=''/>
          </div>
          <div className="card">
            <p>Breifly summarize the concept of urban planning</p>
            <img src={assets.bulb_icon} alt=''/>
          </div>
          <div className="card">
            <p>Tell me a joke</p>
            <img src={assets.message_icon} alt=''/>
          </div>
          <div className="card">
            <p>Improve the readability of this code</p>
            <img src={assets.code_icon} alt=''/>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inacurate info, including about people, so double-check its reponses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main