import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";

const Offerte = (props) => {
  let text = "";
  const loop = () => {
    for (let i = 0; i < props.offertes.length; i++) {
      text += `<li>${props.offertes[i]}</li>`;
    }
  };
  loop();
  return (
    <>
      <div className={"padding-container"}>
        <h2>Recente Offertes</h2>
        <ul dangerouslySetInnerHTML={{ __html: text }}></ul>
      </div>
    </>
  );
};

export default Offerte;
