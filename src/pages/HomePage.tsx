import React, { useCallback } from 'react'

import styled from 'styled-components';
import { OperationRoomUnits } from '../components/OperationRoomUnits/OperationRoomUnits';
import { ToggleButton } from '../components/ToggleButton/ToggleButton';
import { useDarkModeState, useDarkModeToggler } from '../hooks/useDarkTheme';
import { useOperationRoomState } from '../hooks/useOperationRoomState';

const Header = styled.header`
    height: 40px;
    display: flex;
    background: ${({ theme }) => theme.color.secondary};
    align-items: center;
    justify-content: flex-end;
`;

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 40px);
`;

export const HomePage = () => {
    const theme = useDarkModeState();
    const themeToggler = useDarkModeToggler();
    const onChange = useCallback(() => {
        themeToggler();
    }, [themeToggler]);

    const operationState = useOperationRoomState();
    return (
        <div>
            <Header>
                <ToggleButton onChange={onChange} checked={theme === 'dark'} />
            </Header>
            <Section>
                {operationState && <OperationRoomUnits data={operationState} />}
            </Section>
        </div>
    )
}


