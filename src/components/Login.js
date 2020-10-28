import React, { useState, useEffect } from "react";
import Home from "../pages/Home";

const GeoLocation = () => {
  const [details, setDetails] = useState(null);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    fetch("https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3")
      .then((response) => response.json())
      .then((data) => setDetails(data));
  });

  const check = () => {
    if (details.IPv4 === "217.100.231.170") {
      setAccess(true);
    } else {
      alert("helaas pindakaas");
    }
  };

  return <>{access ? <Home /> : <button onClick={check}>Log in</button>}</>;
};

export default GeoLocation;
