"use client";
import Image from 'next/image'
import styles from './page.module.css'
import { useSession } from 'next-auth/react';
// import {signIn} from "next-auth/react"

export default function Home() {
  const session=useSession();
  // const { data: session } = useSession({
  //   required: false,
  //   onUnauthenticated() {
  //     redirect("/signin/callbackUrl=/dashboard");
  //   },
  // });
  console.log(session)
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
