import React from "react";
import {DES1, DES2, DES3, DES4, DES5, DES6, DES7, DES8, DES9, DES10, DES11, DES12, DES13, DES14, DES15, DES16, DES17, DES18, DES19, DES20} from "../cipherLogic/constants"

import des1pic from "../components/DES1.png";
import des2pic from "../components/desimg2.png";
import des3pic from "../components/desimg3.png";
import des4pic from "../components/desimg4.png";
import des5pic from "../components/desimg5.png";
import des6pic from "../components/desimg6.png";
import des7pic from "../components/desimg7.png";
import des8pic from "../components/desimg8.png";

const DesCipher = () => {
  return(
      <div style = {{margin : "auto", width: "90%"}}>
      <strong>OVERVIEW:-</strong>
      <br/>
      <strong>Data encryption standard (DES)</strong>
      <br/>
      <br/>
      {DES1}
      <br/>
      <br/>
      <img style = {{width: "50%", display: "flex", margin: "auto"}} src={des1pic} />
      <br/>
      <br/>
      {DES2}
      <br/>
      <br/>
      <img  style = {{ display: "flex", margin: "auto"}}src={des2pic} />
      <br/>
      {DES3}
      <br/>
      <br/>
      {DES4}
      <br/>
      <br/>
      {DES5}
      <br/>
      {DES6}
      <br/>
      {DES7}
      <br/>
      {DES8}
      <br/>
      {DES9}
      <br/>
      {DES10}
      <br/>
      <br/>
      <img style = {{width: "50%", display: "flex", margin: "auto"}} src={des3pic} />
      <br/>
      <br/>
      <strong>Initial Permutation (IP) –</strong>
      <br/>
      <br/>
      {DES11}
      <br/>
      <br/>
      {DES12}
      <br/>
      <br/>
      {DES13}
      <br/>
      <br/>
      <img style = {{ display: "flex", margin: "auto"}} src={des4pic} />
      <br/>
      {DES14}
      <br/>
      <br/>
      <img style = {{ display: "flex", margin: "auto"}} src={des5pic} />
      <br/>
      <strong>Step-1: Key transformation –</strong>
      <br/>
      <br/>
      {DES15}
      <br/>
      {DES16}
      <br/>
      <br/>
      <img  style = {{ display: "flex", margin: "auto"}} src={des6pic} />
      <br/>
      <br/>
      {DES17}
      <br/>
      <br/>
      <img  style = {{ display: "flex", margin: "auto"}} src={des7pic} />
      <br/>
      <br/>
      {DES18}
      <br/>
      <br/>
     <strong>Step-2: Expansion Permutation –</strong>
      <br/>
      <br/>
      {DES19}
      <br/>
      <br/>
      <img style = {{ display: "flex", margin: "auto"}} src={des8pic} />
      <br/>
      <br/>
      {DES20}
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
  )


}

export default DesCipher;