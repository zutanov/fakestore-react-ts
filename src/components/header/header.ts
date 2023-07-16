import styled from 'styled-components';

export const SHeader = styled.header`
    padding: 20px 0;
    background-color: darkblue;
    color: white;
`;

export const SHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.h2`
    transition: 0.6s;
    :hover {
        font-size: 26px;
    }
`;

export const SHeaderAuth = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
`;
export const SHeaderImg = styled.img`
    cursor: pointer;
    transition: 0.8s;
    :hover {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;
