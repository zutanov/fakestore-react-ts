import React, { useState } from 'react';
import { SInput, SInputTitle } from './input';

interface InpProps {
    setText: (value: string) => void;
    desc: string;
    // title: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<InpProps> = ({ setText, desc }) => {
    const [innerValue, setInnerValue] = useState('');

    const handleChange = (e?: any) => {
        setInnerValue(e.target.value);
        setText(e.target.value);
    };

    return (
        <>
            <SInputTitle>{desc}</SInputTitle>
            <SInput type='text' value={innerValue} minLength={3} onChange={handleChange} />
        </>
    );
};

export default Input;
