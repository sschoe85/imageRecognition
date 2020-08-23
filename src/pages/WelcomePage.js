import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function WelcomePage() {
  const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-decoration: none;
    align-self: center;
    justify-self: center;
  `;

  const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
  `;
  return (
    <StyledDiv>
      <h1>
        Hello! This is your computer. Show me something and I will tell you what
        I see...
      </h1>
      <StyledLink to="/video">Let's go!</StyledLink>
    </StyledDiv>
  );
}

export default WelcomePage;
