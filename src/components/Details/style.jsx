import styled from 'styled-components';

export const Container = styled.div`
    transition:2s all cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: ${props => props.bg < 18? "#C4C5C5":"#000"};
    width: 100vw;
    padding: 80px 120px 40px;
    display: grid;
    justify-items: center;
    text-align: center;
    z-index: 2;
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width: 992px){
        padding: 60px 30px;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

