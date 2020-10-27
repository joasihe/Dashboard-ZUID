import React, { useState, useEffect } from "react";
import VerticalBar from "../components/BarGood";
import PieChart from "../components/PieGood";
import Pipeline from "../components/Pipeline";
import Csat from "../components/Csat";
import "../assets/style/style.css";
import styled from "styled-components";
import { Card, AppBar, Toolbar } from "@material-ui/core";

import axios from "axios";

const MainWrapper = styled.div`
  padding-left: 3em;
  margin-top: 8em;
  height: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: space-between !important;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 40%;
`;

const BarWrapper = styled.div`
  margin-right: 30px;
  width: 40%;
  height: 30%;
`;

const PieWrapper = styled.div`
  margin-right: 30px;
  width: 30%;
`;

const NumbersWrapper = styled.div`
  margin-top: 30px;
  width: 92%;
  height: 10%;
`;

const CsatWrapper = styled.div`
  width: 25%;
`;

const CsatHeight = styled.div`
  height: 100%;
`;

function Home() {
  const [csat, setCsat] = useState(3.2);
  const [pipeline, setPipeline] = useState("");

  axios.get("test.json").then(function (response) {
    setCsat(response.data.csat);
    setPipeline(response.data.pipeline);
  });

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
        <Wrapper>
          <BarWrapper>
            <VerticalBar />

            {/* <Bar target={20} forecast={forecast} /> */}
          </BarWrapper>

          <PieWrapper>
            {/* <Pie percentage={percentage} /> */}
            <PieChart />
          </PieWrapper>
          <CsatWrapper>
            <Card>
              <CsatHeight>
                <div className={"padding-container"}>
                  <h2>CSAT</h2>
                  <Csat csat={csat} />
                </div>
              </CsatHeight>
            </Card>
          </CsatWrapper>
        </Wrapper>
        <NumbersWrapper>
          <Card>
            <div className={"padding-container"}>
              <h2>Uitstaande Offertes</h2>
              <Pipeline pipeline={pipeline} />
            </div>
          </Card>
        </NumbersWrapper>
      </MainWrapper>
    </>
  );
}

export default Home;
