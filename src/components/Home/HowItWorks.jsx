import React from 'react'
import {FaUserPlus} from  'react-icons/fa'
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from "react-icons/io"

const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How Jobify Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>create Account</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae, 
              nesciunt blanditiis hic reprehenderit aliquam!</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find aJob/Post aJob</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae, 
              nesciunt blanditiis hic reprehenderit aliquam!</p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>create Account</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero molestiae, 
              nesciunt blanditiis hic reprehenderit aliquam!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks