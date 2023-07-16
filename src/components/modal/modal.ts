import styled from 'styled-components';

export const SModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SModalWindow = styled.div`
    position: relative;
    padding: 10px;
    background-color: white;
    width: 400px;
`;

export const SModalTitle = styled.h2`
    text-align: center;
`;

export const SModalClose = styled.img`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
`;
