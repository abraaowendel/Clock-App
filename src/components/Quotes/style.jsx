import styled from 'styled-components';

export const Container  = styled.div`
    color: #fff;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const Top  = styled.div`
    display: flex;
    align-items: center;
`;
export const Author  = styled.div`
    font-weight: 700;
    font-size: 1.2em;
    padding: 15px 0 98px;
`;
export const Quote  = styled.q`
    font-size: 1.1em;
    letter-spacing: 1px;
    line-height: 28px;
    max-width: 600px;
`;
export const ButtonRefresh = styled.img`
    cursor: pointer;
    transition: .3s all ease-in-out;
    margin: 0 0 5px 20px;
    :hover{
        opacity: .5;
    }
`
