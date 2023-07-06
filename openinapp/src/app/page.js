"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import "../styles/home.css";
import Form from "@/components/form/page";
// import {signIn} from "next-auth/react"

export default function Home() {
  const session = useSession();
  // const { data: session } = useSession({
  //   required: false,
  //   onUnauthenticated() {
  //     redirect("/signin/callbackUrl=/dashboard");
  //   },
  // });
  console.log(session);
  return (
    <div id="container">
      <div id="left">
        <h1>Board.</h1>
      </div>
      <div id="right">
        <Form/>
      </div>
    </div>
  );
}
