import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";

const Slaging = (props) => {
  const [Bullet, setBullet] = useState("");

  useEffect(() => {
    let number;
    number = (props.pipeline / 100) * 70;
    setBullet(number);
  });

  return (
    <Card>
      <div className={"padding-container"}>
        <h2>Kans van slagen:</h2>
        <div>
          <h1 className={"number"}>{Bullet} offertes</h1>
        </div>
      </div>
    </Card>
  );
};

export default Slaging;
