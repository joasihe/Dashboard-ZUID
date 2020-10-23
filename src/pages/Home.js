import React, { useState , useRef} from 'react'
import Bar from '../components/Bar.js';
import Pie from '../components/Pie.js';
import Pipeline from '../components/Pipeline';
import Csat from '../components/Csat';
import '../assets/style/style.css';
import styled from 'styled-components';
import { Card, AppBar, Toolbar, TextField } from '@material-ui/core'


const Wrapper = styled.div`
display: flex;
flex-direction: space-around;
flex-wrap: wrap;
align-items: flex-start;
padding-left: 3em;
margin-top: 8em;
`;

const Header = styled.div`
padding: 20px 0 10px 3em;

`;

const BarWrapper = styled.div`
margin-right: 30px;
width: 40%;
`;

const PieWrapper = styled.div`
margin-right: 30px;
width: 30%;
`;

const NumbersWrapper = styled.div`
margin-top: 30px;
width: 40%;
${'' /* font-size: 30px; */}
`;

const CsatWrapper = styled.div`
width: 20%;
`;

function Home() {
    const [target, setTarget] = useState(100);
    const [forecast, setForecast] = useState(500);
    const [percentage, setPercentage] = useState(3);
    const [csat, setCsat] = useState(2);
    const [pipeline, setPipeline] = useState(40);



        return (
            <>
                <AppBar style={{ background: '#003752' }} className={'app-bar'} >
  <Toolbar>
                        <img width='150px' src='http://brandbook.byzuid.com/wp-content/uploads/2019/11/logo_ZUIDcreatives_rgb_white_transp.png' alt='' />
                        <h2>Digital Performance Dashboard</h2>
  </Toolbar>
</AppBar>
                <Wrapper>
                <BarWrapper>
                        <Bar target={target} forecast={forecast} />

                    </BarWrapper>

                    <PieWrapper>
                    <Pie />
                    </PieWrapper>
                    <CsatWrapper>

                            <Card><div className={'padding-container'}>
                                <h2>CSAT</h2>
                            <Csat csat={csat} /> </div>
                            </Card>

</CsatWrapper>
                    <NumbersWrapper>
                        <Card>
                            <div className={'padding-container'}>
                        <h2>Pipelinebulletzooi</h2>
                        <Pipeline pipeline={pipeline} />
                            </div>
                        </Card>
                    </NumbersWrapper>
{/* <form noValidate autoComplete="off">
  <TextField ref="myField" id="standard-basic" label="Standard" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <span>{this.refs.myField.getValue()}</span>

</form> */}
                </Wrapper>
            </>
        )
}

export default Home;
