import React from "react";
import { Card } from "@material-ui/core";

const Offerte = (props) => {
  return (
    <Card>
      <div className={"padding-container"}>
        <h2>Offertes:</h2>
        <div>
          <h1 className={"number"}>{props.pipeline} offertes</h1>
        </div>
      </div>
    </Card>
  );
};

export default Offerte;
