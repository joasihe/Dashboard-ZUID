import React, { useState } from "react";
import VerticalBar from "../components/BarGood";
import PieChart from "../components/PieGood";
import Offerte from "../components/Pipeline";
import Slaging from "../components/Slaging";
import Csat from "../components/Csat";
import Notes from "../components/Notes";
import "../assets/style/style.css";
import styled from "styled-components";
import { Card, AppBar, Toolbar } from "@material-ui/core";

import axios from "axios";

const MainWrapper = styled.div`
  height: 83vh;
  margin: 0 6em;
  display: flex;
  flex-direction: column;
`;

const FirstRow = styled.div`
  margin-top: 8em;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;
const SecondRow = styled.div`
  margin-top: 90px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
`;

const BarWrapper = styled.div`
  width: 30%;
`;

const PieWrapper = styled.div`
  width: 30%;
`;

const CsatWrapper = styled.div`
  width: 30%;
`;

const NotesWrapper = styled.div`
  width: 30%;
  height: 100%;
`;

const OfferteWrapper = styled.div`
  width: 30%;
`;

const SlagingWrapper = styled.div`
  width: 30%;
`;

function Home() {
  const [csat, setCsat] = useState("");
  const [pipeline, setPipeline] = useState("");
  const [offertes, setOffertes] = useState("");

  axios.get("test.json").then(function (response) {
    setCsat(response.data.csat);
    setPipeline(response.data.pipeline);
    setOffertes(response.data.offertes);
  });

  // http://dashboard.test/test.json

  return (
    <>
      <AppBar style={{ background: "#003752" }} className={"app-bar"}>
        <Toolbar>
          <img
            width='150px'
            src='http://brandbook.byzuid.com/wp-content/uploads/2019/11/logo_ZUIDcreatives_rgb_white_transp.png'
            alt=''
          />
          <h2>
            <a href='./index.php'>Digital Performance Dashboard </a>
          </h2>
        </Toolbar>
      </AppBar>
      <MainWrapper>
        <FirstRow>
          <BarWrapper>
            <VerticalBar />
          </BarWrapper>
          <PieWrapper>
            <PieChart />
          </PieWrapper>
          <CsatWrapper>
            <Card>
              <div className={"padding-container"}>
                <h2>CSAT</h2>
                <Csat csat={csat} height={200} />
              </div>
            </Card>
          </CsatWrapper>
        </FirstRow>
        <SecondRow>
          <OfferteWrapper>
            <Offerte pipeline={pipeline} />
          </OfferteWrapper>
          <SlagingWrapper>
            <Slaging pipeline={pipeline} />
          </SlagingWrapper>
          <NotesWrapper>
            <Notes />
          </NotesWrapper>
        </SecondRow>
      </MainWrapper>
    </>
  );
}

export default Home;
