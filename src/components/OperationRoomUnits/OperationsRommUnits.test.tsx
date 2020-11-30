import React from 'react';
import { screen } from '@testing-library/react';
import { OperationRoomUnits } from './OperationRoomUnits';
import { RenderHelper } from '../../mock/renderHelper';


describe('OperationRoomUnits', () => {
    test('renders humidity as it is', () => {
        RenderHelper(<OperationRoomUnits data={{
            humidity: '1',
            airPressure: '2',
            temperature: '3',
        }} />);
        const element = screen.getByText('humidity');
        expect(element.parentElement?.childNodes[1].textContent).toBe('1');
    });

    test('renders humidity as it is', () => {
        RenderHelper(<OperationRoomUnits data={{
            humidity: '1',
            airPressure: '2',
            temperature: '3',
        }} />);
        const element = screen.getByText('air pressure');
        expect(element.parentElement?.childNodes[1].textContent).toBe('2');
    });

    test('renders humidity as it is', () => {
        RenderHelper(<OperationRoomUnits data={{
            humidity: '1',
            airPressure: '2',
            temperature: '3',
        }} />);
        const element = screen.getByText('temperature');
        expect(element.parentElement?.childNodes[1].textContent).toBe('3');
    });

});
