import styled from 'styled-components';

export const SButtonWrapper = styled.div``;

export const SButton = styled.button`
    height: 70px;
    width: 70px;
    border-radius: 50px;
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 32px;
    transition: 0.3s;
    :hover {
        background-color: #0061ff;
        font-size: 38px;
        height: 90px;
        width: 90px;
    }
`;

export const SFormButton = styled.button`
    margin-top: 20px;
    height: 50px;
    width: 130px;
    border-radius: 5px;
    border: none;
    background-color: darkblue;
    color: white;
    font-size: 18px;
    transition: 0.6s;
    :hover {
        background-color: #fff;
        color: darkblue;
        border: 1px solid darkblue;
        font-size: 20px;
        font-weight: bold;
    }
`;
