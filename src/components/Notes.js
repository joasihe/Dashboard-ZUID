import React, { Component } from "react";
import EditableLabel from "react-inline-editing";
import Card from "@material-ui/core/Card";

const Notes = (props) => {
  return (
    <>
      <Card>
        <div className="padding-container">
          <h2>Opmerkingen</h2>
          <EditableLabel
            text="Vul hier opmerkingen in..."
            labelClassName="myLabelClass"
            inputClassName="myInputClass"
            inputWidth="200px"
            inputHeight="200px"
            inputMaxLength="500"
            labelFontWeight="bold"
            inputFontWeight="bold"
            onFocus={() => {
              console.log("test");
            }}
            onFocusOut={() => {
              console.log("test");
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default Notes;
