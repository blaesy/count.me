import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
position: relative;
margin: 0 auto 0 auto;
height: 200px;
display: flex;
justify-content: space-between;
`;

const NumberTooltip = styled.div`
position: absolute;
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-bottom: 20px solid rgba(0,0,0,0.5);
top: 0;
opacity: 0;
transition: all .2s ease-in-out;
margin-top: 140px;
`;

const BottomPanel = styled.div`
position: absolute;
width: 100%;
top: 0;
height: 200px;
color: white;
background: rgba(0,0,0,0.5);
opacity: ${props => props.hovered ? '1' : '0'};
transition: all .2s ease-in-out;
margin-top: 160px;
box-sizing: border-box;
padding: 25px;
font-size: 22px;
`;

const NumberWrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 200px;
height: 200px;

&:hover ${NumberTooltip} {
    opacity: 1;
}
`;


const Number = styled.span`
color: white;
font-size: 86px;
height: 50%;
`;

const NumberDesc = styled.span`
color: white;
font-weight: bold;
font-size: 16px;
height: 50%;
`;

const Timer = ({date}) => {
    const [hovered, setHovered] = React.useState(false);
    const [text, setText] = React.useState('');

    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            let dateTo = new Date(date);
            let dateFrom = new Date();
            let dateDif = Math.abs(dateTo - dateFrom);

            let days = dateDif / 1000 / 60 / 60 / 24;
            let hours = dateDif / 1000 / 60 / 60 % 24;
            let minutes = dateDif / 1000 / 60 % 60;
            let seconds = dateDif / 1000 % 60;

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [date])

    let daysText = "This is a text. It should not be here, but for the presentation purposes, it is. Please do not ask any more questions about it, it is just visual sir.";
    let hoursText = "Hours fly past, so does time; awareness is a key to success. Said no one, never.";
    let minutesText = "This text is an unusual piece of work, usually considered a blop of text, that no one reads - well, it is somewhat true. nice.";
    let secondsText = "You reached the last text, congratulations! Now, let's proceed to another website, maybe you shall what you are looking for there. Good luck!"

    return (
        <Wrapper>
            <NumberWrapper onMouseOver={() => {setHovered(true); setText(daysText)}} onMouseLeave={() => setHovered(false)}>
                <Number>{Math.floor(days)}</Number>
                <NumberDesc>DAYS</NumberDesc>
                <NumberTooltip></NumberTooltip>
            </NumberWrapper>
            <NumberWrapper onMouseOver={() => {setHovered(true); setText(hoursText)}} onMouseLeave={() => setHovered(false)}>
                <Number>{Math.floor(hours)}</Number>
                <NumberDesc>HOURS</NumberDesc>
                <NumberTooltip></NumberTooltip>
            </NumberWrapper>
            <NumberWrapper onMouseOver={() => {setHovered(true); setText(minutesText)}} onMouseLeave={() => setHovered(false)}>
                <Number>{Math.floor(minutes)}</Number>
                <NumberDesc>MINUTES</NumberDesc>
                <NumberTooltip></NumberTooltip>
            </NumberWrapper>
            <NumberWrapper onMouseOver={() => {setHovered(true); setText(secondsText)}} onMouseLeave={() => setHovered(false)}>
                <Number>{Math.floor(seconds)}</Number>
                <NumberDesc>SECONDS</NumberDesc>
                <NumberTooltip></NumberTooltip>
            </NumberWrapper>
            <BottomPanel hovered={hovered}>{text}</BottomPanel>
        </Wrapper>
    )
}

export default Timer;