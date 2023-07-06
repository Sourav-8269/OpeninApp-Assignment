'use client'
import { signIn,signOut,useSession } from 'next-auth/react';
import { redirect } from "next/navigation";
import { useEffect } from 'react';

const Dashboard = () => {
    const session=useSession();

    useEffect(()=>{
      if(session.status=="unauthenticated"){
          redirect("/");
      }
    },[session.status])

    console.log(session)
    if(session.status=="authenticated"){
        return <button onClick={()=>signOut("google")} >Logout</button>
    }
  return (
    <div>
      <h1>apsdp</h1>
      <button onClick={()=>signIn('google')}>Google Button</button>
    </div>
  );
};

export default Dashboard;
