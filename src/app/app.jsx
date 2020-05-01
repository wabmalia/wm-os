import React from "react";
import TaskBar from "./taskbar/taskbar";
import styled from "styled-components";

const App = () => (
    <>
        <MainStyle>
            <ContentStyle>
                <h1>React Boilerplate</h1>
                <span>
                    by <b>Wilson Mália</b>
                </span>
            </ContentStyle>
            <TaskBar />
        </MainStyle>
    </>
);

const ContentStyle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const MainStyle = styled.main`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export default App;
