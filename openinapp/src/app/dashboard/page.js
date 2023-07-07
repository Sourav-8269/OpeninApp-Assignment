'use client'
import { signIn,signOut,useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import "../../styles/dashboard.css";
import Card from '../components/Card';
import BottomCards from '../components/BottomCards';
import BarChart from './../components/Chart';

const Dashboard = () => {
    const session=useSession();

    useEffect(()=>{
      if(session.status=="unauthenticated"){
          redirect("/");
      }
    },[session.status])

    console.log(session)
    // if(session.status=="authenticated"){
    //     return <button onClick={()=>signOut("google")} >Logout</button>
    // }
  return (
    <div id="container">
      <div id="left">
        <Sidebar/>
      </div>
      <div id="right">
        <Navbar/>
        <Card/>
        <BarChart/>
        <BottomCards/>
      </div>
    </div>
  );
};

export default Dashboard;
