import React, { useState } from "react";
import {  Layout } from "antd";
import Sidepanel from "./components/sidepanel";
import "antd/dist/antd.css";
import MainContent from "./components/cryptography";
import HomePage from "./components/homepage";


export default function App({setDecrypt}) {
  const [cipher, setCipher] = useState("");
  const [collapsed, setcollapsed] = useState(true);
  const [exit, setExit] = useState(false);
  const [decryption, setDecryption] = useState(false);

  console.log()

  
  console.log("cipher", cipher)

  const decryptionClicked = (e) => {
    setDecryption(e)
  }


  return (
    <Layout style={{ height: "100vh" }}>
		<Sidepanel setCipher={setCipher}
		cipher = {cipher}
		collapsed = {collapsed} 
		setcollapsed = {setcollapsed}
		setExit = {setExit}
		exit = {exit}
    setDecrypt = {decryptionClicked}/>
      
     {(collapsed || exit ) ? <HomePage
	 exit = {exit}/> : <MainContent cipher={cipher} 
                        decryption = {decryption}/> } 
    </Layout>
  );
}
