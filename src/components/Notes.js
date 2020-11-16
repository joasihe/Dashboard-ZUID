import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const Notes = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Card>
        <div className={"padding-container"}>
          <h2>Opmerkingen</h2>
          <TextField
            id='standard-full-width'
            fullWidth
            label=''
            placeholder='Plaats hier opmerkingen'
            multiline
            onChange={handleChange}
          />
        </div>
      </Card>
    </>
  );
};

export default Notes;
