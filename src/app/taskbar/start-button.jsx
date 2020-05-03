import React from "react";
import styled from "@emotion/styled";

const StartButton = () => {
    return <StartStyle>WM</StartStyle>;
};

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 5vw;
    height: 100%;

    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    :hover {
        background-color: ${(props) => props.theme.colors.light};
        cursor: pointer;
    }
`;

export default StartButton;
