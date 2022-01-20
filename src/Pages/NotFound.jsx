import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${ (window.innerHeight * .8) + "px"};
        h1 {
            font-size: 3em;
            font-weight: bold;
            color: rgb(100,100,100);
            line-height: 2em;
        }
        p {
            font-size: 1.5em;
            font-weight: bold;
        }
`

const NotFound = () => (
    <Container>
        <h1>Está muito frio para andar por ai sozinha</h1>
        <p> code | 404 </p>
    </Container>
)

export default NotFound