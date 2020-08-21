import React from 'react';
import styled from "@emotion/styled";

function WelcomePage() {
    const StyledButton = styled.button`
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 1.5em`

    const StyledDiv = styled.div`
    `
    return (
        <div>
        <h1>Hello! This is your computer. Show me something and I will tell you what I see...</h1>
        <button>Let's go!</button></div>
    );
}

export default WelcomePage;