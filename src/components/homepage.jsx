import React from "react";
import { Layout } from "antd";

const { Content } = Layout;
const HomePage = ({ exit }) => {
  console.log("exit", exit);
  return (
    <Content style={{ backgroundColor: "#DBF2F5" }}>
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
      {exit ? (
        <div
          style={{
            margin: "5vw",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Thanks for playing around with the rail fence cipher, If you want to
          continue,Click on the left arrow and
          of the side panel to play around.
        </div>
      ) : (
        <div
          style={{
            margin: "5vw",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Welcome to Rail Fence Cipher application, Click on the right
          arrow of the side panel to play around.
        </div>
      )}
    </Content>
  );
};
export default HomePage;
