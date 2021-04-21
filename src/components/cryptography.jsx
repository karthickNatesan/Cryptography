import React, { useEffect, useState } from "react";
import { Layout, Form, Input, Switch, Col, Row } from "antd";
import * as CipherLogic from "../cipherLogic/cipher";
import {ENCDEF, ENCDEFEX, DECDEF, DECDEFEX,  DESENCRYPT, DESDECRYPT } from "../cipherLogic/constants"
import Des from "../cipherLogic/Des";
import Overview from "./railFenceOverview";
import DesCipher from './desCipher';

import styled from "styled-components";

const { Content } = Layout;
const { TextArea } = Input;

const Encryption = styled.div`
  color: black;
  background-color: darkturquoise;
  width: 100%;
  padding: 10px;
  height: 140px;
  overflow: scroll;
  overflow-x: hidden;
`;
const Example = styled.p`
  font-weight: bold;
`;

const TitleENC = styled.div`
  margin-top: -22px;
  font-weight: bold;
`;



const Margin = styled.div`
  margin-top: 20px;
`;
const getRailFence = (cipher, dec, text, key) =>
  cipher === "railfence"
    ? dec
      ? CipherLogic.railFenceCipherDecryptor(text, parseInt(key))
      : CipherLogic.railFenceCipherEncryptor(text, key)
    : "";

const Cryptography = ({ cipher, decryption }) => {
  const [dec, setDec] = useState(false);
  const [key, setKey] = useState(0);
  const [text, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [desText, setDesText] = useState("");
  const [plainText, setDesPLainText] = useState("");

  console.log("decryption", decryption);

  useEffect(() => {
    if (key.length > 0)
      dec
        ? setPlainText(getRailFence(cipher, dec, cipherText, key))
        : setCipherText(getRailFence(cipher, dec, text, key));
  }, [cipher, key]);

  useEffect(() => {
    setDec(decryption);
  }, [decryption]);

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };

  const plainTextContainer = () => {
    return (
      <>
        <Col span={12} offset={2}>
          <Form.Item label="Plain Text:">
            <TextArea
              rows={6}
              style={{ backgroundColor: "#edf1f2" }}
              value = {cipher === "railfence" ? text : plainText}
              onChange={(e) => {
                if (dec === false) {
                  setPlainText(e.target.value);
                  setCipherText(getRailFence(cipher, 0, e.target.value, key));
                  setDesPLainText(e.target.value)
                  key && setDesText(Des.encrypt(e.target.value, key));
                }
              }}
            />
          </Form.Item>
        </Col>
        {(cipher === 'railfence' ||  cipher === "des") &&
        <Col span={10}>
          <TitleENC>Encryption:</TitleENC>
          <Encryption>
            {cipher === 'railfence' ? ENCDEF : DESENCRYPT } 
            {cipher === 'railfence' && <Example>
            {ENCDEFEX}
            </Example>}
          </Encryption>
        </Col>
  }
      </>
    );
  };
console.log("desText", desText)
  const cipherTextContainer = () => {
    return (
      <>
        <Col span={12} offset={2}>
          <Form.Item label="Cipher Text:">
            <TextArea
              rows={6}
              style={{ backgroundColor: "#edf1f2" }}
              value = {cipher === "railfence" ? cipherText : desText}
              onChange={(e) => {
                if (dec) {
                  setCipherText(e.target.value);
                  setPlainText(getRailFence(cipher, 1, e.target.value, key));
                  setDesText(e.target.value);
                  key && setDesPLainText(Des.decrypt(e.target.value, key));
                }
              }}
            />
          </Form.Item>
        </Col>
        {(cipher === 'railfence' ||  cipher === "des") &&  <Col span={10}>
          <TitleENC>Decryption:</TitleENC>
          <Encryption>
          {cipher === "railfence" ? DECDEF : DESDECRYPT }
          { cipher === "railfence" && <Example>
            {DECDEFEX}
            </Example>}
          </Encryption>
        </Col>
  }
      </>
    );
  };
  return (
    <Content style={{ backgroundColor: "#A2A5A5" }}>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "800",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Cryptography
      </p>

      <Form style={{ margin: "5vw" }} {...layout}>
        <Row>
          <Col span={3}></Col>
          <Col span={6}>
            <Form.Item label="Keys:">
              <Input
                style={{ backgroundColor: "#edf1f2" }}
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>{dec ? cipherTextContainer() : plainTextContainer()}</Row>
        <Margin />
        <Row>{dec ? plainTextContainer() : cipherTextContainer()}</Row>
      </Form>
{ cipher === "railfence" ? 
<Overview/>
       :  cipher === "des" ? <DesCipher/> : "" } 
      <Col span={24} offset={1}>
        <i style={{ color: "black" }}>Developed by: Karthickeyan Natesan</i>
        <div style={{ paddingLeft: "100px", color: "black" }}>K00480711</div>
      </Col>
    </Content>
  );
};
export default Cryptography;
