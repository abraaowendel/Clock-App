import styled from 'styled-components';

export const Container = styled.div`
    background-color: #C4C5C5;
    width: 100vw;
    padding: 80px 120px 40px;
    display: grid;
    justify-items: center;
    text-align: center;
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width: 992px){
        padding: 60px 30px;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

