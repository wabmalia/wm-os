import React from "react";
import styled from "@emotion/styled";
import StartButton from "./start-button";
import Clock from "./clock";

const TaskBar = () => {
    return (
        <Style>
            <StartButton />
            <Clock />
        </Style>
    );
};

const Style = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-height: 3em;
    flex-grow: 1;
    background: ${(props) => props.theme.colors.dark};
`;

export default TaskBar;
