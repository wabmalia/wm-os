import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const useDate = (refreshRate) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), refreshRate);
        return () => clearInterval(interval);
    });
    return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
};

const formatNumber = (number) => {
    return `${number < 10 ? "0" : ""}${number}`;
};

const Clock = () => {
    const date = useDate(1000);
    return (
        <ClockStyle>
            <p>
                {`${formatNumber(date.hours)}:
                ${formatNumber(date.minutes)}:
                ${formatNumber(date.seconds)}`}
            </p>
            <p>
                <b>{`${formatNumber(date.day)}/
                ${formatNumber(date.month)}/
                ${formatNumber(date.year)}`}</b>
            </p>
        </ClockStyle>
    );
};

const ClockStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.3em 0.5em;
    padding: 0 1em;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.light};
    p {
        text-align: center;
        font-size: medium;
        margin: 0;
    }
`;

export default Clock;
