import styled from 'styled-components';

export const SProductCard = styled.div`
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1.5fr 2.5fr 1fr;
    gap: 15px;
    width: 500px;
    height: 210px;
    border: 1px solid black;
`;

export const SProductWrapper = styled.div`
    margin: auto;
`;

export const SProductImg = styled.img`
    height: 200px;
    width: 141px;
    object-fit: contain;
`;

export const SProductTitle = styled.h4`
    margin-bottom: 10px;
`;
export const SProductDesc = styled.p``;
