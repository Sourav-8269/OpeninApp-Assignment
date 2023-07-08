'use client'
import { useSession } from 'next-auth/react';
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

    // if(session.status=="authenticated"){
    //     return <button onClick={()=>signOut("google")} >Logout</button>
    // }
  return (
      <div id="dashboardContainer">
        <div id="dashboardLeft">
          <Sidebar/>
        </div>
        <div id="dashboardRight">
          <Navbar/>
          <Card/>
          <BarChart/>
          <BottomCards/>
        </div>
      </div>
  );
};

export default Dashboard;
