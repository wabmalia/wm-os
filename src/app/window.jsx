import React, { useEffect } from "react";
import { useSetState } from "react-hanger";
import styled from "@emotion/styled";

const usePosition = (initialPosition = { x: 0, y: 0 }) => {
    const {
        state: { position, moving, offset },
        setState: setLocation
    } = useSetState({
        moving: false,
        position: initialPosition,
        offset: { x: 0, y: 0 }
    });

    const onMouseMove = (event) => {
        setLocation({
            position: {
                x: position.x + (event.screenX - offset.x),
                y: position.y + (event.screenY - offset.y)
            },
            offset: { x: event.screenX, y: event.screenY }
        });
    };
    const onMouseUp = () => {
        setLocation({ moving: false });
    };

    useEffect(() => {
        if (moving) {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [moving]);

    const onMouseDown = (event) => {
        event.preventDefault();
        setLocation({
            moving: true,
            offset: { x: event.screenX, y: event.screenY }
        });
    };

    return {
        x: position.x,
        y: position.y,
        bindToNav: {
            onMouseDown: onMouseDown
        }
    };
};

const Window = ({ children }) => {
    const location = usePosition();
    const size = usePosition({ x: 200, y: 200 });
    return (
        <WindowStyle
            style={{
                top: `${location.y}px`,
                left: `${location.x}px`,
                width: `${size.x}px`,
                height: `${size.y}px`
            }}
        >
            <nav {...location.bindToNav}>
                <ul>
                    <li>Window</li>
                </ul>
            </nav>
            {children}
            <Resize {...size.bindToNav} />
        </WindowStyle>
    );
};
const Resize = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1em;
    height: 1em;
    :hover {
        cursor: nw-resize;
    }
    ::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
    }
`;

const WindowStyle = styled.div`
    position: absolute;
    border-top: solid ${(props) => props.theme.colors.dark};
    border-left: solid ${(props) => props.theme.colors.dark};
    border: double ${(props) => props.theme.colors.dark};
    nav {
        height: 1em;
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            border-bottom: solid ${(props) => props.theme.colors.dark};
            background-color: ${(props) => props.theme.colors.dark};
        }
        li {
            list-style-type: none;
        }
    }
`;

export default Window;
