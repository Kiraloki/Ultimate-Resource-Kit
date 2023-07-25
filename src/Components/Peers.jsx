import React from "react";
import { circle, peerdata } from "./data/peerdata";
import BasicSelect from "./BasicSelect";
import Circular from "./Circular";

function Peers() {
  return (
    <div>
      <p>How do I comapre my peers?</p>
      <p>These numbers represent current goal acheivmnet</p>

      <div style={{ display: "flex" }}>
        <div>
          {peerdata.map((obj) => {
            return (
              <>
                <BasicSelect obj={obj} />
              </>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
            }}
          >
            {circle.map((obj) => {
              return (
                <>
                  <Circular obj={obj} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Peers;
