import React, { useState } from "react";
import VerticalBar from "../components/BarGood";
import PieChart from "../components/PieGood";
import Pipeline from "../components/Pipeline";
import Csat from "../components/Csat";
import Offerte from "../components/Offertes";
import EditableLabel from "react-inline-editing";
import "../assets/style/style.css";
import styled from "styled-components";
import { Card, AppBar, Toolbar } from "@material-ui/core";

import axios from "axios";

const MainWrapper = styled.div`
  margin-top: 8em;
  height: 80vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const StackedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: space-around;
  height: 50%;
`;

const BarWrapper = styled.div`
  width: 40%;
`;

const PieWrapper = styled.div`
  width: 30%;
`;

const NumbersWrapper = styled.div``;

const CsatWrapper = styled.div`
  margin-bottom: 30px;
`;

function Home() {
  const [csat, setCsat] = useState("");
  const [pipeline, setPipeline] = useState("");
  const [offertes, setOffertes] = useState("");
  const [notes, setNotes] = useState("");

  axios.get("test.json").then(function (response) {
    setCsat(response.data.csat);
    setPipeline(response.data.pipeline);
    setOffertes(response.data.offertes);
  });

  const handleFocus = (text) => {
    axios
      .post("test.json", {
        notes: text,
      })
      .then(function (response) {
        setNotes(response.data.notes);
      });
  };

  // http://dashboard.test/test.json

  return (
    <>
      <AppBar style={{ background: "#003752" }} className={"app-bar"}>
        <Toolbar>
          <img width="150px" src="http://brandbook.byzuid.com/wp-content/uploads/2019/11/logo_ZUIDcreatives_rgb_white_transp.png" alt="" />
          <h2>
            <a href="./index.php">Digital Performance Dashboard </a>
          </h2>
        </Toolbar>
      </AppBar>
      <MainWrapper>
        <BarWrapper>
          <VerticalBar />
        </BarWrapper>
        <PieWrapper>
          <PieChart />
        </PieWrapper>
        <StackedWrapper>
          <CsatWrapper>
            <Card>
              <div className={"padding-container"}>
                <h2>CSAT</h2>
                <Csat csat={csat} />
              </div>
            </Card>
          </CsatWrapper>
          <NumbersWrapper>
            <Card>
              <div className={"padding-container"}>
                <h2>Uitstaande Offertes</h2>
                <Pipeline pipeline={pipeline} />
              </div>
            </Card>
          </NumbersWrapper>
        </StackedWrapper>
      </MainWrapper>
      <Card>
        <Offerte offertes={offertes} />
        <EditableLabel text="Hello!" labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocus={"hai"} onFocusOut={handleFocus} />
      </Card>
    </>
  );
}

export default Home;
