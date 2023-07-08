import Image from 'next/image'
import React from 'react'
import bell from "./../../../public/bell.png"
import user from "./../../../public/user.png";
import logout from "./../../../public/logout.png"
import "./../../styles/navbar.css"
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const handleLogout=()=>{
    alert("Bye, come back soon!");
    signOut("google");
  }
  return (
    <div id="nav-container">
        <div id="nav-left">
            <h1>Dashboard</h1>
        </div>
        <div id="nav-right">
            <input type="text" placeholder="Search" id="search" />
            <Image src={bell} id="navIcon" width={18} height={20}/>
            <Image src={logout} id="navIcon" width={22} height={22} onClick={()=>handleLogout()} />
            <div id="user">
            <Image src="https://lh3.googleusercontent.com/a/AAcHTtecjXwKEtdc7TIyovEGTie_Pf6f5ZPHXDTPdK7z_C_Lzg=s96-c" width={30} height={30} id="userImage" />
                {/* <img src="https://lh3.googleusercontent.com/a/AAcHTtfLD4Xc2pvTg-rjYuHRxyk1Rob8oP7lL5hSM5M4OO0P=s96-c" alt="User"/> */}
                {/* <Image/> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar