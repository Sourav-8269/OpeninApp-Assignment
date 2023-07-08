import React from 'react'
import "./../../styles/sidebar.css"
import dashboard from "./../../../public/dashboard.png";
import transactionIcon from "./../../../public/transaction_icon.png";
import settingsIcon from "./../../../public/setting_icon.png";
import userIcon from "./../../../public/user_icon.png";
import scheduleIcon from "./../../../public/schedule_icon.png"
import Image from 'next/image'
const Sidebar = () => {
  return (
    <div id="main">
        <h1 id="sidebar-heading">Board.</h1>
        <div id="menu">
            <div className="menu-item">
                <Image src={dashboard} width={20} height={20} alt="Dashboard"/>
                <p>Dashboard</p>
            </div>
            <div className="menu-item">
                <Image src={transactionIcon} width={20} height={23} alt="transaction"/>
                <p>Transactions</p>
            </div>
            <div className="menu-item">
                <Image src={scheduleIcon} width={20} height={20} alt="Schedule"/>
                <p>Schedules</p>
            </div>
            <div className="menu-item">
                <Image src={userIcon} width={20} height={20} alt="user"/>
                <p>Users</p>
            </div>
            <div className="menu-item">
                <Image src={settingsIcon} width={19} height={20} alt="Settings"/>
                <p>Settings</p>
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