import Image from 'next/image'
import React from 'react'
import bell from "./../../../public/bell.png"
import user from "./../../../public/user.png"
import "./../../styles/navbar.css"

const Navbar = () => {
  return (
    <div id="nav-container">
        <div id="nav-left">
            <h1>Dashboard</h1>
        </div>
        <div id="nav-right">
            <input type="text" placeholder="Search" id="search" />
            <Image src={bell} width={18} height={20}/>
            <div id="user">
            <Image src={user} width={30} height={30}/>
                {/* <img src="https://lh3.googleusercontent.com/a/AAcHTtfLD4Xc2pvTg-rjYuHRxyk1Rob8oP7lL5hSM5M4OO0P=s96-c" alt="User"/> */}
                {/* <Image/> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar