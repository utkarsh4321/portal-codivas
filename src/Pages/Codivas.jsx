import React from "react"
import styled from 'styled-components'
// import rightArrow from "./../Assets/Images/arrow-right.png";
// import leftArrow from "./../Assets/Images/arrow-left.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Camis from './../Assets/Images/camis.png'
const Main = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
background-color: #1F1F1F;
height: 100vh;
`
const TitleCenter = styled.div`
color: white;
font-size: 3em;
margin: 1em ;
`
const GridCodivas = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat(2, 1fr);

`
const CardCodiva = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
  width: 10em;
  
}
`
const NameCodiva = styled.div`
display: flex;
justify-content: center;
color: #71BB73;
margin:1em 0px;
font-size: 1.5em;
`
const LanguagesCodiva = styled.div`
color:white;
display:grid;
grid-template-columns: repeat(2,1fr);

ul{
  margin:1em -1em;
}
li{
  margin:1em;
  
}
`
const SkillsCodiva = styled.div`
color:white;
`
const ContactBox = styled.div`
  color:white;

i{
  color:white;
}

`
const Codivas = () => {
  return (
   <>
   
   <Main> 
    <TitleCenter> Codivas </TitleCenter>
    <GridCodivas>
      <CardCodiva>
        <img src={Camis} alt="white woman wearing a red shirt , smiling"/>
        <NameCodiva>Camis Monteiro</NameCodiva>
        <SkillsCodiva>Front-end Web and Mobile</SkillsCodiva>
        <LanguagesCodiva>
        <ul>
            <li>React</li>
            <li>C#</li>
            <li>C++</li>
            <li>Xamarin</li>
            
            </ul>

            <ul>
            <li>.NET</li>
            <li>Flutter</li>
            <li>Wordpress</li>
            
            </ul>
            </LanguagesCodiva>

            <p> cidade </p>
            <ContactBox> 
                  GH
                  link 
                  whats
                  </ContactBox>
        
      
      </CardCodiva>

      {/* <CardCodiva>
        <img src={Camis} alt="white woman wearing a red shirt , smiling"/>
      </CardCodiva> */}


    </GridCodivas>
    
   </Main>

   
   </>
  );
};

export default Codivas;