import React from 'react';
import { SButton, SButtonWrapper } from './button';

interface BtnProps {
    setVisible: (value: boolean) => void;
}
const Button: React.FC<BtnProps> = ({ setVisible }) => {
    return (
        <SButtonWrapper>
            <SButton onClick={() => setVisible(true)}>+</SButton>
        </SButtonWrapper>
    );
};

export default Button;
