import React, { Component } from 'react'
import Bar from '../components/Bar.js';
import Pie from '../components/Pie.js';
import Pipeline from '../components/Pipeline';
import Csat from '../components/Csat';
import '../assets/style/style.css';
import styled from 'styled-components';
import { Card } from '@material-ui/core'

const Wrapper = styled.div`
font-family: 'barlow condensed semibold';
h1 {
    font-size: 100px;
    }
display: flex;
flex-direction: space-around;
flex-wrap: wrap;
padding-left: 3em;
`;

const Header = styled.div`
padding: 20px 0 10px 3em;
`;

const BarWrapper = styled.div`
margin-right: 30px;
width: 30%;
`;

const PieWrapper = styled.div`
width: 30%;
`;

const NumbersWrapper = styled.div`
margin-top: 30px;
width: 60%;
`;

export default class Home extends Component {
    render() {
        return (
            <>
                <Header>
                    <img width='150px' src='http://brandbook.byzuid.com/wp-content/uploads/2019/11/logo_ZUIDcreatives_rgb_black.png' alt='' />
                </Header>
                <Wrapper>
                <BarWrapper>
                        <Bar target={100} forecast={200} />
                </BarWrapper>
                <PieWrapper>
                    <Pie />
                    </PieWrapper>

                    <NumbersWrapper>
                              <Card variant='outlined'>
                    <Pipeline /></Card>
                        <Csat />
                        </NumbersWrapper>
                </Wrapper>
            </>
        )
    }
}
