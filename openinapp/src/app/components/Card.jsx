import React from 'react'
import "./../../styles/card.css"
import Image from 'next/image'
import revenue from "./../../../public/revenue.png";
import users from "./../../../public/users.png"
import transaction from "./../../../public/transaction.png"
import like from "./../../../public/like.png"

const Card = () => {
  return (
    <div id="card-div">
        <div id="first-box">
            <p>Total Revenues</p>
            <h2>$ 2,129,430</h2>
            <Image src={revenue} width={26} height={24} id="card-icon" alt='Card' />
        </div>
        <div id="second-box">
            <p>Total Transactions</p>
            <h2>1,520</h2>
            <Image src={transaction} width={21} height={24} id="card-icon" alt='Card'/>
        </div>
        <div id="third-box">
            <p>Total Likes</p>
            <h2>9,721</h2>
            <Image src={like} width={24} height={24} id="card-icon" alt='Card'/>
        </div>
        <div id="fourth-box">
            <p>Total Users</p>
            <h2>892</h2>
            <Image src={users} width={36} height={24} id="card-icon" alt='Card'/>
        </div>
    </div>
  )
}

export default Card