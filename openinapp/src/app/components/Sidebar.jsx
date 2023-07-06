import React from 'react'
import "./../../styles/sidebar.css"
import dashboard from "./../../../public/dashboard.png"
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div id="main">
        <h1 id="sidebar-heading">Board.</h1>
        <div id="menu">
            <div className="menu-item">
                <Image src={dashboard} width={24} height={24} alt="Dashboard" srcset=""/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={dashboard} width={24} height={24} alt="Dashboard" srcset=""/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={dashboard} width={24} height={24} alt="Dashboard" srcset=""/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={dashboard} width={24} height={24} alt="Dashboard" srcset=""/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={dashboard} width={24} height={24} alt="Dashboard" srcset=""/>
                <p>Dashboard</p>
            </div>
        </div>
        <div id="footer">
            <p>Help</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Sidebar