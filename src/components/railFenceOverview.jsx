import React from "react";
import styled from "styled-components";
import {ENCDEF, ENCDEFEX, DECDEF, DECDEFEX, RAILFENCE, RAILFENCE1, ENCRYPTDEF, DESENCRYPT, DESDECRYPT, OVERVIEW, OVERVIEW1, OVERVIEW2, OVERVIEW3, OVERVIEW4, OVERVIEW5, OVERVIEW6, OVERVIEW7, OVERVIEW8, OVERVIEW9, OVERVIEW10} from "../cipherLogic/constants"
import encryption from "../components/encryption.jpg";
import decryption1 from "../components/Decryption1.jpg";
import decryption2 from "../components/Decryption2.jpg";
import decryption3 from "../components/Decryption3.jpg";
import decryption4 from "../components/Decryption4.jpg";
import discussion from "../components/Discussion.jpg";

const Example = styled.p`
  font-weight: bold;
`;

const OverView = styled.div`
  margin: 20px;
  text-align: justify;
`;

const Overview = () => {
    return(
        <OverView>
        <>
        <h1>Overview:-</h1>
        <p>
          {RAILFENCE}
        </p>

        <p>
          {OVERVIEW}
        </p>

        <img src={encryption} />
        <p>
        {RAILFENCE1}
          
        </p>

        <p>
          {OVERVIEW1}

        </p>
        <Example>Encryption</Example>
        <p>
          {ENCRYPTDEF}
        </p>

        <p>
         {OVERVIEW2}
        </p>

        <img src={encryption} />

        <p>
          {OVERVIEW3}
        </p>

        <p>
         {OVERVIEW4}
        </p>
        <p>
         {OVERVIEW5}
        </p>

        <Example>Decryption</Example>
        <p>
          {OVERVIEW6}
          <p />
          <img src={decryption1} />
          <p>
            {OVERVIEW7}
          </p>
          <img src={decryption2} />
          <p>The second stage in the decryption process.</p>
          <img src={decryption3} />
          <p>The third stage in the decryption process.</p>
          <img src={decryption4} />
          <p>
            {OVERVIEW8}
          </p>
        </p>

        <Example>Discussion</Example>
        <p>
          {OVERVIEW9}
        </p>
        <img src={discussion} />
        <p>
          {OVERVIEW10}
        </p>
        </>
      </OverView> 
    )

}

export default Overview;