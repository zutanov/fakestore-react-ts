import styled from 'styled-components';

export const SProductCard = styled.div`
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1.5fr 2.5fr 1fr;
    grid-template-rows: minmax(210px, auto);
    border-radius: 15px;
    gap: 20px;

    box-shadow: 1px 1px 1px darkblue;
    transition: 0.3s;
    :hover {
        box-shadow: 0px 1px 6px darkblue;
    }
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
