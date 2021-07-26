
import Timer from './Timer';
import styled from 'styled-components';
import backgroundImg from './background.jpg';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-image: url(${backgroundImg});
background-size: 100%;
background-position-x: center;
background-position-y: 35%;
height: 100vh;
`;

const HeadingTitle = styled.span`
margin: 200px auto 0 auto;
font-size: 64px;
color: white;
`;

const App = () => {
  return (
    <Wrapper>
      <HeadingTitle>TIME UNTIL <b>NEXT YEAR</b></HeadingTitle>
      <Timer date={'01/01/2022'} />
    </Wrapper>
  );
}

export default App;
