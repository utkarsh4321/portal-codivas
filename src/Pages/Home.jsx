import React from "react"
import styled from 'styled-components'
import backgroundCodivas from '../Assets/Images/manasWorking.jpg'

const Main = styled.div`
 display: flex;
 justify-content: center;

`
const Home = () => {
  return (
   <>
   
   <Main> 
     <img src={backgroundCodivas} alt=" 3 women laughing together with notebooks" />
   </Main>

   
   </>
  );
};

export default Home;