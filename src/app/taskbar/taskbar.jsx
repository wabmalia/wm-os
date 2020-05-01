import React from "react";
import styled from "styled-components";
import StartButton from "./start-button";

const TaskBar = () => {
    return (
        <Style>
            <StartButton />
        </Style>
    );
};

const Style = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-height: 5vh;
    flex-grow: 1;
    background: darkslategray;
`;

export default TaskBar;
