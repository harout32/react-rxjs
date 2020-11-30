import React, { memo } from 'react'
import styled from 'styled-components';

const Card = styled.div`
    width: 400px;
    height: 200px;
    background-color: ${({ theme }) => theme.color.secondary};
    display: flex;
`;

const Column = styled.div`
    height: 100%;
    width: 33.33%;
    display: flex;
    flex-direction: column;

`;

const Text = styled.p`
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    text-transform: capitalize;
`;

const TextValue = styled(Text)`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export interface OperationRoomUnitsProps {
    data: {
        humidity: string;
        temperature: string;
        airPressure: string;
    }
}

export const OperationRoomUnits = memo((props: OperationRoomUnitsProps) => {
    const { data: { humidity, temperature, airPressure } } = props;
    return (
        <Card>
            <Column>
                <Text>humidity</Text>
                <TextValue>{humidity}</TextValue>
            </Column>
            <Column>
                <Text>temperature</Text>
                <TextValue>{temperature}</TextValue>
            </Column>
            <Column>
                <Text>air pressure</Text>
                <TextValue>{airPressure}</TextValue>
            </Column>
        </Card>
    )
});
