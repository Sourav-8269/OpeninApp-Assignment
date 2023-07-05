'use client'
import { signIn,signOut,useSession } from 'next-auth/react';

const Dashboard = () => {
    const session=useSession();
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
