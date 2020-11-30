import React from 'react';
import styled from 'styled-components';

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.grey};
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.background};
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}
`;

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    input:checked + ${Slider} {
        background-color: ${({ theme }) => theme.color.primary};
    }

    input:focus + ${Slider} {
        box-shadow: 0 0 1px ${({ theme }) => theme.color.primary};
    }

    input:checked + ${Slider}:before {
        transform: translateX(26px);
    }

`;

export interface ToggleButtonProps {
    onChange: (isChecked: boolean) => void;
    checked: boolean;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange, checked }) => {
    return (
        <Label>
            <input type="checkbox" defaultChecked={checked} onChange={(event) => {
                onChange(event.target.checked);
            }} />
            <Slider />
        </Label>
    )
};
