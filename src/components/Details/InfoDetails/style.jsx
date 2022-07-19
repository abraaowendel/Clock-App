import styled from 'styled-components';

export const Details = styled.div`
    color: ${props => props.color < 18? "#303030":"#C4C5C5"};
    transition: 1s all ease-out;
`;
export const DetailsTitle = styled.h4`
    letter-spacing: 3px;
    font-weight: 400;
`
export const DetailsResult = styled.h2`
    font-size: 3.5em;
    padding: 20px 0 30px;
    @media screen and (max-width: 992px){
        padding: 15px 0 40px;
        font-size: 2.8em;
    }
    @media screen and (max-width: 600px){
        font-size: 2.3em;
    }
    @media screen and (max-width: 480px){
        font-size: 1.6em;
        padding: 10px 0 30px;
    }
`

