import React from "react";
import TaskBar from "./taskbar/taskbar";
import styled from "@emotion/styled";
import Window from "./window";
import { ThemeProvider } from "emotion-theming";

const theme = {
    colors: {
        dark: "#142850",
        light: "#27496d",
        primary: "#00909e",
        secondary: "#dae1e7"
    }
};

const App = () => (
    <>
        <MainStyle>
            <ThemeProvider theme={theme}>
                <ContentStyle>
                    <Window>
                        <h1>WM Operating System</h1>
                        <span>
                            by <b>Wilson Mália</b>
                        </span>
                    </Window>
                </ContentStyle>
                <TaskBar />
            </ThemeProvider>
        </MainStyle>
    </>
);

const ContentStyle = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.light};
`;

const MainStyle = styled.main`
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
`;

export default App;
