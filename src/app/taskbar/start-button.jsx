import React from "react";
import styled from "styled-components";

const StartButton = () => {
    return <StartStyle>WM</StartStyle>;
};

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 5vw;
    height: 100%;

    color: white;
    text-align: center;
    :hover {
        background-color: darkgray;
        cursor: pointer;
    }
`;

export default StartButton;
